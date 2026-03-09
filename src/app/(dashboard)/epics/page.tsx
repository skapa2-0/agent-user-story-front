'use client';

import { Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Header } from '@/components/layout/Header';

const mockEpics = [
  { id: '1', name: 'Auth Module', description: 'Authentification et gestion des utilisateurs', storyCount: 12, completedStories: 8, status: 'active' as const },
  { id: '2', name: 'Reporting', description: 'Génération et export de rapports', storyCount: 8, completedStories: 3, status: 'active' as const },
  { id: '3', name: 'Notifications', description: 'Système de notifications multi-canal', storyCount: 6, completedStories: 6, status: 'completed' as const },
  { id: '4', name: 'Analytics', description: 'Tableau de bord et métriques', storyCount: 15, completedStories: 5, status: 'active' as const },
];

const statusVariant = { active: 'info', completed: 'success', archived: 'default' } as const;

export default function EpicsPage() {
  return (
    <div className="flex flex-col h-full">
      <Header title="Mes Epics" breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Mes Epics' }]} />
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Epics ({mockEpics.length})</h2>
          <button className="btn-primary flex items-center gap-2"><Plus className="w-4 h-4" />Créer un Epic</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockEpics.map((epic) => {
            const progress = epic.storyCount > 0 ? Math.round((epic.completedStories / epic.storyCount) * 100) : 0;
            return (
              <Card key={epic.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{epic.name}</CardTitle>
                    <StatusBadge label={epic.status} variant={statusVariant[epic.status]} />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">{epic.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs"><span>{epic.completedStories}/{epic.storyCount} stories</span><span>{progress}%</span></div>
                    <div className="w-full bg-dark-200 rounded-full h-2"><div className="bg-accent rounded-full h-2 transition-all" style={{ width: `%` }} /></div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
