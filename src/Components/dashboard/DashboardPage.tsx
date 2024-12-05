'use client';

// import { Card } from '@/components/ui/card';
import { 
  Users, 
  UserCheck, 
  UserX, 
  Calendar,
  TrendingUp,
  Clock,
  Menu
} from 'lucide-react';
// import { Progress } from '@/components/ui/progress';
import RecentEvaluations from './RecentEvaluations';
import EvaluationStats from './EvaluationStats';
import { Card } from '../ui/card';

export default function DashboardPage() {
  const stats = [
    {
      title: 'Total Candidates',
      value: '1,284',
      icon: Users,
      change: '+12.5%',
      changeType: 'positive'
    },
    {
      title: 'Evaluated',
      value: '864',
      icon: UserCheck,
      change: '+8.2%',
      changeType: 'positive'
    },
    {
      title: 'Pending',
      value: '420',
      icon: Clock,
      change: '-2.4%',
      changeType: 'negative'
    },
    {
      title: 'Success Rate',
      value: '67.3%',
      icon: TrendingUp,
      change: '+5.1%',
      changeType: 'positive'
    },
  ];

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Dashboard</h1>
          <div className="flex items-center space-x-2 sm:space-x-4 text-sm sm:text-base">
            <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
            <span className="text-muted-foreground">April 2024</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-4 sm:p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold mt-1 sm:mt-2">{stat.value}</h3>
                </div>
                <div className="bg-primary/10 p-2 rounded-full">
                  <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
              </div>
              <div className={`mt-2 sm:mt-4 text-xs sm:text-sm ${
                stat.changeType === 'positive' ? 'text-green-500' : 'text-red-500'
              }`}>
                {stat.change} from last month
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <EvaluationStats />
          <RecentEvaluations />
        </div>
      </div>
    </div>
  );
}