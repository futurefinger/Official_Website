import os
import shutil
import subprocess
import sys

website_dir = r"c:\Users\HP\Documents\Projects\Future Finger Technologies Projects\Official_Website"
deploy_dir = r"c:\Users\HP\Documents\Projects\Future Finger Technologies Projects\gh-pages-deploy"
dist_dir = os.path.join(website_dir, "dist")

def run(cmd, cwd=website_dir):
    print(f"Running: {cmd} (cwd={cwd})")
    res = subprocess.run(cmd, cwd=cwd, shell=True, capture_output=True, text=True)
    if res.stdout:
        print(res.stdout)
    if res.stderr:
        print(res.stderr, file=sys.stderr)
    if res.returncode != 0:
        raise RuntimeError(f"Command failed with exit code {res.returncode}: {cmd}")
    return res.stdout

def main():
    if not os.path.exists(dist_dir):
        raise FileNotFoundError(f"Dist dir does not exist: {dist_dir}")

    # Remove existing worktree if it exists
    if os.path.exists(deploy_dir):
        print(f"Removing existing deploy_dir: {deploy_dir}")
        run(f"git worktree remove --force \"{deploy_dir}\"", cwd=website_dir)
        if os.path.exists(deploy_dir):
            shutil.rmtree(deploy_dir, ignore_errors=True)

    print("Adding git worktree for gh-pages...")
    run(f"git worktree add --force \"{deploy_dir}\" origin/gh-pages", cwd=website_dir)

    print("Cleaning old files from deploy_dir (keeping .git)...")
    for item in os.listdir(deploy_dir):
        if item == ".git":
            continue
        item_path = os.path.join(deploy_dir, item)
        if os.path.isdir(item_path):
            shutil.rmtree(item_path)
        else:
            os.remove(item_path)

    print(f"Copying files from dist ({dist_dir}) to deploy_dir ({deploy_dir})...")
    for item in os.listdir(dist_dir):
        s = os.path.join(dist_dir, item)
        d = os.path.join(deploy_dir, item)
        if os.path.isdir(s):
            shutil.copytree(s, d)
        else:
            shutil.copy2(s, d)

    print("Staging and committing changes in gh-pages...")
    run("git add -A", cwd=deploy_dir)
    status = run("git status --porcelain", cwd=deploy_dir)
    if not status.strip():
        print("No changes to commit on gh-pages.")
    else:
        run('git commit -m "deploy: live release with HRMS portal, mobile header button, and universal SPA routing"', cwd=deploy_dir)
        print("Pushing to origin/gh-pages...")
        run("git push origin HEAD:gh-pages", cwd=deploy_dir)
        print("Successfully pushed to gh-pages!")

    print("Cleaning up worktree...")
    run(f"git worktree remove --force \"{deploy_dir}\"", cwd=website_dir)
    print("Worktree removed. Deployment complete.")

if __name__ == "__main__":
    main()
