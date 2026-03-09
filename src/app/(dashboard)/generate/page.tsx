'use client';

import { useState } from 'react';
import { Wand2, Sparkles } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Header } from '@/components/layout/Header';

const mockGenerated = [
  {
    id: '1',
    title: "En tant qu'utilisateur, je veux pouvoir me connecter avec mon email",
    description: "Permettre aux utilisateurs de s'authentifier via email/mot de passe",
    acceptanceCriteria: ['Formulaire de connexion visible', 'Validation email', "Message d'erreur clair"],
    priority: 'high' as const,
    storyPoints: 5,
  },
  {
    id: '2',
    title: "En tant qu'utilisateur, je veux réinitialiser mon mot de passe",
    description: 'Flux de réinitialisation par email avec lien sécurisé',
    acceptanceCriteria: ['Lien de réinitialisation envoyé', 'Token expire après 24h', 'Confirmation visuelle'],
    priority: 'medium' as const,
    storyPoints: 3,
  },
  {
    id: '3',
    title: "En tant qu'admin, je veux gérer les utilisateurs",
    description: "Interface d'administration pour la gestion des comptes",
    acceptanceCriteria: ['Liste des utilisateurs', 'Actions CRUD', 'Filtres et recherche'],
    priority: 'high' as const,
    storyPoints: 8,
  },
];

const priorityVariant = { low: 'default', medium: 'info', high: 'warning', critical: 'error' } as const;

export default function GeneratePage() {
  const [context, setContext] = useState('');
  const [count, setCount] = useState(5);
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    setGenerated(true);
  };

  return (
    <div className="flex flex-col h-full">
      <Header
        title="Générer des Stories"
        breadcrumbs={[{ label: 'Accueil', href: '/' }, { label: 'Générer des Stories' }]}
      />
      <div className="p-6 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Contexte de génération</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Décrivez la fonctionnalité ou le produit
                </label>
                <textarea
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  className="input w-full h-32 resize-none"
                  placeholder="Ex: Une application de gestion de tâches collaborative..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre de stories à générer: {count}
                </label>
                <input
                  type="range"
                  min={1}
                  max={20}
                  value={count}
                  onChange={(e) => setCount(Number(e.target.value))}
                  className="w-full accent-accent"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1</span>
                  <span>20</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Format</label>
                <div className="flex gap-3">
                  <label className="flex items-center gap-2 text-sm text-gray-400">
                    <input type="radio" name="format" defaultChecked className="accent-accent" />
                    En tant que... Je veux... Afin de...
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-400">
                    <input type="radio" name="format" className="accent-accent" />
                    Titre + Description
                  </label>
                </div>
              </div>
              <button onClick={handleGenerate} className="btn-primary flex items-center gap-2">
                <Wand2 className="w-4 h-4" />
                Générer {count} stories
              </button>
            </div>
          </CardContent>
        </Card>

        {generated && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent" />
              <h2 className="text-lg font-semibold text-white">Stories générées</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {mockGenerated.map((story) => (
                <Card key={story.id}>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-white font-medium">{story.title}</h3>
                    <div className="flex items-center gap-2 shrink-0 ml-4">
                      <StatusBadge label={story.priority} variant={priorityVariant[story.priority]} />
                      <span className="text-xs text-gray-500">{story.storyPoints} pts</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">{story.description}</p>
                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-1">{"Crit\u00e8res d'acceptation:"}</p>
                    <ul className="space-y-1">
                      {story.acceptanceCriteria.map((c, i) => (
                        <li key={i} className="text-xs text-gray-400 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
