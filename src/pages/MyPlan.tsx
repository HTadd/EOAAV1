import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Download, Calendar } from "lucide-react";

interface Task {
  id: string;
  title: string;
  week: number;
  completed: boolean;
  completedDate?: string;
}

const MOCK_PLAN = {
  id: "plan-1",
  sport: "Track & Field",
  level: "Beginner",
  startDate: "2025-12-15",
  currentWeek: 2,
  tasks: [
    { id: "t1", title: "Visit track (familiarize yourself with environment)", week: 1, completed: true, completedDate: "2025-12-16" },
    { id: "t2", title: "Basic warm-up and stretching routine", week: 1, completed: true, completedDate: "2025-12-17" },
    { id: "t3", title: "Walk/jog for 15-20 minutes", week: 1, completed: true, completedDate: "2025-12-18" },
    { id: "t4", title: "Cool down and hydration", week: 1, completed: true, completedDate: "2025-12-18" },
    { id: "t5", title: "Warm up dynamic stretching", week: 2, completed: true, completedDate: "2025-12-20" },
    { id: "t6", title: "Jog for 20-25 minutes at conversational pace", week: 2, completed: false },
    { id: "t7", title: "Add 4x2-minute faster segments", week: 2, completed: false },
    { id: "t8", title: "Strength work: squats and lunges", week: 2, completed: false },
  ] as Task[],
};

export default function MyPlan() {
  const [tasks, setTasks] = useState<Task[]>(MOCK_PLAN.tasks);

  const handleToggleTask = (taskId: string) => {
    setTasks(
      tasks.map((t) =>
        t.id === taskId
          ? {
              ...t,
              completed: !t.completed,
              completedDate: !t.completed ? new Date().toISOString().split("T")[0] : undefined,
            }
          : t
      )
    );
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const progressPercent = Math.round((completedTasks / totalTasks) * 100);

  // Streak calculation: consecutive days with at least 1 task completed
  const streakDays = calculateStreak(tasks);

  const weeklyStats = [1, 2, 3, 4].map((week) => {
    const weekTasks = tasks.filter((t) => t.week === week);
    const completed = weekTasks.filter((t) => t.completed).length;
    return { week, total: weekTasks.length, completed };
  });

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8">
        <h1 className="text-3xl font-bold">My Plan</h1>
        <div className="flex items-center gap-2 mt-2">
          <Badge className="bg-white/20">{MOCK_PLAN.sport}</Badge>
          <Badge className="bg-white/20">{MOCK_PLAN.level}</Badge>
          <Badge className="bg-white/20">Week {MOCK_PLAN.currentWeek} of 4</Badge>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-card p-6 border border-border">
          <p className="text-sm text-muted-foreground">Overall Progress</p>
          <div className="mt-2">
            <div className="text-3xl font-bold text-foreground">{progressPercent}%</div>
            <div className="mt-2 w-full bg-muted h-2 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full" style={{ width: `${progressPercent}%` }} />
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {completedTasks} of {totalTasks} tasks
            </p>
          </div>
        </Card>

        <Card className="bg-card p-6 border border-border">
          <p className="text-sm text-muted-foreground">Current Streak</p>
          <div className="mt-2">
            <div className="text-3xl font-bold text-orange-500">{streakDays}</div>
            <p className="text-xs text-muted-foreground mt-1">consecutive days</p>
          </div>
        </Card>

        <Card className="bg-card p-6 border border-border">
          <p className="text-sm text-muted-foreground">This Week</p>
          <div className="mt-2">
            <div className="text-3xl font-bold text-foreground">
              {weeklyStats[MOCK_PLAN.currentWeek - 1]?.completed ?? 0}/
              {weeklyStats[MOCK_PLAN.currentWeek - 1]?.total ?? 0}
            </div>
            <p className="text-xs text-muted-foreground mt-1">tasks completed</p>
          </div>
        </Card>
      </div>

      {/* Weekly Summary */}
      <Card className="bg-card p-6 border border-border">
        <h2 className="font-semibold text-foreground mb-4">Weekly Summary</h2>
        <div className="grid grid-cols-4 gap-3">
          {weeklyStats.map((stat) => (
            <div
              key={stat.week}
              className={`p-3 rounded border ${stat.completed === stat.total ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800" : "bg-muted border-border"}`}
            >
              <p className="font-semibold text-foreground text-center">Week {stat.week}</p>
              <p className="text-center text-sm mt-1">
                <span className="font-bold">{stat.completed}</span>/{stat.total}
              </p>
            </div>
          ))}
        </div>
      </Card>

      {/* Current Week Tasks */}
      <Card className="bg-card p-6 border border-border">
        <h2 className="font-semibold text-foreground mb-4">This Week's Tasks</h2>
        <div className="space-y-2">
          {tasks
            .filter((t) => t.week === MOCK_PLAN.currentWeek)
            .map((task) => (
              <label key={task.id} className="flex items-start gap-3 p-3 rounded hover:bg-muted transition-colors cursor-pointer">
                <Checkbox checked={task.completed} onCheckedChange={() => handleToggleTask(task.id)} className="mt-1" />
                <div className="flex-1">
                  <p className={`text-foreground ${task.completed ? "line-through text-muted-foreground" : ""}`}>
                    {task.title}
                  </p>
                  {task.completedDate && <p className="text-xs text-muted-foreground mt-1">✓ Completed {task.completedDate}</p>}
                </div>
              </label>
            ))}
        </div>
      </Card>

      {/* All Weeks */}
      <div className="space-y-4">
        {[1, 2, 3, 4].map((week) => (
          <Card key={week} className="bg-card p-6 border border-border">
            <h3 className="font-semibold text-foreground mb-3">Week {week}</h3>
            <div className="space-y-2">
              {tasks
                .filter((t) => t.week === week)
                .map((task) => (
                  <label key={task.id} className="flex items-start gap-3 p-2 rounded hover:bg-muted transition-colors cursor-pointer">
                    <Checkbox checked={task.completed} onCheckedChange={() => handleToggleTask(task.id)} className="mt-1" />
                    <div className="flex-1">
                      <p className={`text-sm text-foreground ${task.completed ? "line-through text-muted-foreground" : ""}`}>
                        {task.title}
                      </p>
                    </div>
                  </label>
                ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Export Buttons */}
      <div className="grid gap-3 md:grid-cols-2">
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" /> Export as PDF
        </Button>
        <Button variant="outline" className="gap-2">
          <Calendar className="h-4 w-4" /> Export as Calendar (ICS)
        </Button>
      </div>
    </div>
  );
}

function calculateStreak(tasks: Task[]): number {
  const completedDates = tasks.filter((t) => t.completedDate).map((t) => new Date(t.completedDate!));
  if (completedDates.length === 0) return 0;

  completedDates.sort((a, b) => b.getTime() - a.getTime());
  let streak = 1;
  for (let i = 0; i < completedDates.length - 1; i++) {
    const diff = (completedDates[i].getTime() - completedDates[i + 1].getTime()) / (1000 * 60 * 60 * 24);
    if (diff === 1) streak++;
    else break;
  }
  return streak;
}
