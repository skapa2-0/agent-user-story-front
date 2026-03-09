'use client';
import { useState } from 'react';
import { GripVertical, Filter } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Header } from '@/components/layout/Header';

const mockBacklog = [
  { id: '1', title: 'Authentification SSO', epic: 'Auth Module', priority: 'high' as const, points: 8, status: 'ready' as const },
  { id: '2', title: 'Export CSV', epic: 'Reporting', priority: 'medium' as const, points: 5, status: 'in_progress' as const },
  { id: '3', title: 'Notification email', epic: 'Notifications', priority: 'low' as const, points: 3, status: 'draft' as const },
  { id: '4', title: 'Dashboard analytics', epic: 'Analytics', priority: 'high' as const, points: 13, status: 'ready' as const },
  { id: '5', title: 'Gestion des roles', epic: 'Auth Module', priority: 'critical' as const, points: 8, status: 'in_progress' as const },
  { id: '6', title: 'Pagination API', epic: 'API v2', priority: 'medium' as const, points: 3, status: 'draft' as const },
  { id: '7', title: 'Webhook integration', epic: 'API v2', priority: 'high' as const, points: 8, status: 'ready' as const },
];
const priorityVariant = { low: 'default', medium: 'info', high: 'warning', critical: 'error' } as const;
const statusVariant = { draft: 'default', ready: 'info', in_progress: 'warning', done: 'success' } as const;

export default function BacklogPage() {
  const [fp, setFp] = useState('all');
  const [fs, setFs] = useState('all');
  const filtered = mockBacklog.filter((s) => {
    if (fp !== 'all' && s.priority !== fp) return false;
    if (fs !== 'all' && s.status !== fs) return false;
    return true;
  });
  return (
    <div className="flex flex-col h-full">
      <Header title="Backlog" breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Backlog' }]} />
      <div className="p-6 space-y-6">
        <div className="flex items-center gap-4">
          <Filter className="w-4 h-4 text-gray-400" />
          <select value={fp} onChange={(e) => setFp(e.target.value)} className="input text-sm">
            <option value="all">Toutes priorites</option>
            <option value="critical">Critique</option><option value="high">Haute</option>
            <option value="medium">Moyenne</option><option value="low">Basse</option>
          </select>
          <select value={fs} onChange={(e) => setFs(e.target.value)} className="input text-sm">
            <option value="all">Tous statuts</option>
            <option value="draft">Brouillon</option><option value="ready">Pret</option>
            <option value="in_progress">En cours</option><option value="done">Termine</option>
          </select>
          <span className="text-sm text-gray-500">{filtered.length} stories</span>
        </div>
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead><tr className="border-b border-dark-200 text-left">
                <th className="pb-3 w-8"></th><th className="pb-3 text-sm font-medium text-gray-400">Titre</th>
                <th className="pb-3 text-sm font-medium text-gray-400">Epic</th><th className="pb-3 text-sm font-medium text-gray-400">Priorite</th>
                <th className="pb-3 text-sm font-medium text-gray-400">Points</th><th className="pb-3 text-sm font-medium text-gray-400">Statut</th>
              </tr></thead>
              <tbody>{filtered.map((story) => (
                <tr key={story.id} className="border-b border-dark-200 last:border-0 hover:bg-dark-200/50">
                  <td className="py-3"><GripVertical className="w-4 h-4 text-gray-600 cursor-grab" /></td>
                  <td className="py-3 text-sm text-white">{story.title}</td>
                  <td className="py-3 text-sm text-gray-400">{story.epic}</td>
                  <td className="py-3"><StatusBadge label={story.priority} variant={priorityVariant[story.priority]} /></td>
                  <td className="py-3 text-sm text-white">{story.points}</td>
                  <td className="py-3"><StatusBadge label={story.status.replace('_', ' ')} variant={statusVariant[story.status]} /></td>
                </tr>))}</tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
