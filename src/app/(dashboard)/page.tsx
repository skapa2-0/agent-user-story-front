'use client';

import { LayoutDashboard, Layers, Clock, Star, Wand2 } from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Header } from '@/components/layout/Header';

const stats = [
  { label: 'Total Stories', value: '142', icon: LayoutDashboard, color: 'text-blue-400' },
  { label: 'Epics Actifs', value: '8', icon: Layers, color: 'text-emerald-400' },
  { label: 'Stories en attente', value: '23', icon: Clock, color: 'text-amber-400' },
  { label: 'Points estimés', value: '356', icon: Star, color: 'text-purple-400' },
];

const recentStories = [
  { id: '1', title: 'Authentification SSO', epic: 'Auth Module', priority: 'high' as const, points: 8, status: 'ready' as const },
  { id: '2', title: 'Export CSV des rapports', epic: 'Reporting', priority: 'medium' as const, points: 5, status: 'in_progress' as const },
  { id: '3', title: 'Notification email', epic: 'Notifications', priority: 'low' as const, points: 3, status: 'draft' as const },
  { id: '4', title: 'Dashboard analytics', epic: 'Analytics', priority: 'high' as const, points: 13, status: 'ready' as const },
  { id: '5', title: 'Gestion des rôles', epic: 'Auth Module', priority: 'critical' as const, points: 8, status: 'in_progress' as const },
];

const priorityVariant = { low: 'default', medium: 'info', high: 'warning', critical: 'error' } as const;
const statusVariant = { draft: 'default', ready: 'info', in_progress: 'warning', done: 'success' } as const;

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-full">
      <Header title="Tableau de bord" />
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                    <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                  </div>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </Card>
            );
          })}
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Stories récentes</h2>
          <Link href="/generate" className="btn-primary flex items-center gap-2">
            <Wand2 className="w-4 h-4" />
            Générer des Stories
          </Link>
        </div>

        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-dark-200 text-left">
                  <th className="pb-3 text-sm font-medium text-gray-400">Titre</th>
                  <th className="pb-3 text-sm font-medium text-gray-400">Epic</th>
                  <th className="pb-3 text-sm font-medium text-gray-400">Priorité</th>
                  <th className="pb-3 text-sm font-medium text-gray-400">Points</th>
                  <th className="pb-3 text-sm font-medium text-gray-400">Statut</th>
                </tr>
              </thead>
              <tbody>
                {recentStories.map((story) => (
                  <tr key={story.id} className="border-b border-dark-200 last:border-0">
                    <td className="py-3 text-sm text-white">{story.title}</td>
                    <td className="py-3 text-sm text-gray-400">{story.epic}</td>
                    <td className="py-3">
                      <StatusBadge label={story.priority} variant={priorityVariant[story.priority]} />
                    </td>
                    <td className="py-3 text-sm text-white">{story.points}</td>
                    <td className="py-3">
                      <StatusBadge label={story.status.replace('_', ' ')} variant={statusVariant[story.status]} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
