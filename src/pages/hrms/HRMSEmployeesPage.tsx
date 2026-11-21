import React, { useState, useEffect } from 'react';
import { HRMSLayout } from '../../components/hrms/HRMSLayout';
import { Employee, getStoredEmployees, saveEmployee } from '../../data/hrmsData';
import { 
  Users, 
  Plus, 
  Search, 
  CheckCircle, 
  DollarSign, 
  Briefcase, 
  ShieldCheck, 
  X,
  Mail,
  Calendar,
  Building
} from 'lucide-react';

export const HRMSEmployeesPage: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState<string>('All');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New employee form state
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [department, setDepartment] = useState<Employee['department']>('Engineering');
  const [email, setEmail] = useState('');
  const [salaryMonthly, setSalaryMonthly] = useState<number>(50000);
  const [status, setStatus] = useState<Employee['status']>('Active');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setEmployees(getStoredEmployees());
  };

  const handleAddEmployee = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    const newEmp: Employee = {
      id: `FFT-EMP-${String(employees.length + 1).padStart(3, '0')}`,
      name,
      role,
      department,
      email,
      salaryMonthly,
      status,
      joinedDate: new Date().toISOString().substring(0, 10)
    };

    saveEmployee(newEmp);
    loadData();
    setIsAddModalOpen(false);
    // Reset form
    setName('');
    setRole('');
    setEmail('');
    setSalaryMonthly(50000);
  };

  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch = 
      emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDept = departmentFilter === 'All' || emp.department === departmentFilter;

    return matchesSearch && matchesDept;
  });

  const departments: Array<'All' | Employee['department']> = ['All', 'Engineering', 'Sales & Business', 'HR & Legal', 'Executive'];

  const totalPayroll = employees.reduce((sum, e) => sum + e.salaryMonthly, 0);

  return (
    <HRMSLayout activeTab="employees">
      <div className="space-y-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-xl">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Users className="w-4 h-4" />
              </span>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                Workforce Management
              </span>
            </div>
            <h1 className="text-2xl font-black text-white">
              Corporate Engineering Bench & Directory
            </h1>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl">
              Internal talent acquisition, active project staffing, and statutory payroll distribution across all engineering desks.
            </p>
          </div>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-bold shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] self-start md:self-auto shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Add Team Member</span>
          </button>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow">
            <div className="text-xs text-slate-400 font-medium">Total Team Size</div>
            <div className="text-2xl font-black text-white mt-1">{employees.length} Members</div>
            <div className="text-[10px] text-cyan-400 mt-1">100% In-House Retained</div>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow">
            <div className="text-xs text-slate-400 font-medium">Engineering Bench</div>
            <div className="text-2xl font-black text-white mt-1">
              {employees.filter(e => e.department === 'Engineering').length} Engineers
            </div>
            <div className="text-[10px] text-emerald-400 mt-1">Full-Stack & Systems</div>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow">
            <div className="text-xs text-slate-400 font-medium">Sales & BizDev</div>
            <div className="text-2xl font-black text-white mt-1">
              {employees.filter(e => e.department === 'Sales & Business').length} Officers
            </div>
            <div className="text-[10px] text-blue-400 mt-1">Domestic & Global B2B</div>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow">
            <div className="text-xs text-slate-400 font-medium">Monthly Payroll Run</div>
            <div className="text-2xl font-black text-white mt-1">₹{(totalPayroll / 1000).toLocaleString()}k</div>
            <div className="text-[10px] text-purple-400 mt-1">TDS & PF Compliant</div>
          </div>
        </div>

        {/* Search & Department Filters */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-lg space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search team members by name, role, or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
            {departments.map((dept) => {
              const count = dept === 'All' 
                ? employees.length 
                : employees.filter(e => e.department === dept).length;
              const isSelected = departmentFilter === dept;

              return (
                <button
                  key={dept}
                  onClick={() => setDepartmentFilter(dept)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    isSelected
                      ? 'bg-blue-600/30 text-blue-300 border border-blue-500/50 shadow-sm'
                      : 'bg-slate-950/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  <span>{dept}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected ? 'bg-blue-500/30 text-blue-200' : 'bg-slate-800 text-slate-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Employees Table */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-xl overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950/70 text-slate-400 uppercase font-semibold text-[10px] tracking-wider border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">Employee</th>
                <th className="py-3 px-4">Department & Role</th>
                <th className="py-3 px-4">Monthly CTC</th>
                <th className="py-3 px-4">Joined Date</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredEmployees.map((emp) => (
                <tr key={emp.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-cyan-400 text-xs">
                        {emp.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-white">{emp.name}</div>
                        <div className="text-[11px] text-slate-400">{emp.email}</div>
                        <div className="text-[10px] font-mono text-cyan-400 mt-0.5">{emp.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-medium text-slate-200">{emp.role}</div>
                    <span className="inline-block px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-slate-400 text-[10px] mt-1">
                      {emp.department}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-white">₹{emp.salaryMonthly.toLocaleString()}/mo</div>
                    <div className="text-[10px] text-slate-400">₹{(emp.salaryMonthly * 12).toLocaleString()} Annual CTC</div>
                  </td>
                  <td className="py-3.5 px-4 text-slate-300 font-mono text-[11px]">
                    {emp.joinedDate}
                  </td>
                  <td className="py-3.5 px-4">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                      emp.status === 'Active'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                        : emp.status === 'On Leave'
                        ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                        : 'bg-blue-500/10 text-blue-400 border border-blue-500/30'
                    }`}>
                      <CheckCircle className="w-2.5 h-2.5" />
                      {emp.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {/* Add Employee Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                <h3 className="font-bold text-white text-base">Add New Team Member</h3>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddEmployee} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Arjun Kapoor"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Role / Job Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Senior Frontend Engineer"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Department</label>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value as Employee['department'])}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="Engineering">Engineering</option>
                    <option value="Sales & Business">Sales & Business</option>
                    <option value="HR & Legal">HR & Legal</option>
                    <option value="Executive">Executive</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Status</label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value as Employee['status'])}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="Active">Active</option>
                    <option value="Bench">Bench</option>
                    <option value="On Leave">On Leave</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="name@futurefinger.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Monthly Salary (INR)</label>
                  <input
                    type="number"
                    required
                    value={salaryMonthly}
                    onChange={(e) => setSalaryMonthly(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-bold shadow-md shadow-blue-500/20"
                >
                  Save Team Member
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </HRMSLayout>
  );
};
