'use client';

import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function RecentEvaluations() {
  const evaluations = [
    {
      id: '1',
      candidate: 'Sarah Johnson',
      position: 'Senior Frontend Developer',
      status: 'Passed',
      date: '2024-04-15',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    },
    {
      id: '2',
      candidate: 'Michael Chen',
      position: 'Backend Engineer',
      status: 'In Progress',
      date: '2024-04-14',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    },
    {
      id: '3',
      candidate: 'Emily Rodriguez',
      position: 'Product Designer',
      status: 'Scheduled',
      date: '2024-04-16',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Passed':
        return 'bg-green-100 text-green-800';
      case 'Failed':
        return 'bg-red-100 text-red-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="p-4 sm:p-6">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl font-semibold">Recent Evaluations</h2>
        <Link href="/candidate" className="text-sm text-primary hover:underline">
          View all
        </Link>
      </div>
      <div className="space-y-3 sm:space-y-4">
        {evaluations.map((evaluation, index) => (
          <Link key={index} href={`/candidate/${evaluation.id}`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 rounded-lg bg-muted/50 gap-3 sm:gap-4 hover:bg-muted transition-colors">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                  <img src={evaluation.avatar} alt={evaluation.candidate} />
                </Avatar>
                <div>
                  <p className="font-medium text-sm sm:text-base">{evaluation.candidate}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{evaluation.position}</p>
                </div>
              </div>
              <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-3 sm:gap-4">
                <Badge variant="secondary" className={`${getStatusColor(evaluation.status)} text-xs sm:text-sm`}>
                  {evaluation.status}
                </Badge>
                <span className="text-xs sm:text-sm text-muted-foreground">{evaluation.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Card>
  );
}