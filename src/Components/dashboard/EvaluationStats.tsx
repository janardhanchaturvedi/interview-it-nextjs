'use client';

import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function EvaluationStats() {
  const skills = [
    { name: 'Technical Skills', value: 78 },
    { name: 'Communication', value: 85 },
    { name: 'Problem Solving', value: 92 },
    { name: 'Cultural Fit', value: 88 },
  ];

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Evaluation Metrics</h2>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-sm text-muted-foreground">{skill.value}%</span>
            </div>
            <Progress value={skill.value} className="h-2" />
          </div>
        ))}
      </div>
    </Card>
  );
}