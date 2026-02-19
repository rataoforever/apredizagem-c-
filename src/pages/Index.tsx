import { Link } from 'react-router-dom';
import { modules } from '@/data/modules';
import { useProgress } from '@/hooks/useProgress';
import Layout from '@/components/Layout';
import { Terminal, BookOpen, CheckCircle2, ArrowRight, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const levelBadge: Record<string, string> = {
  'Iniciante': 'bg-primary/20 text-primary',
  'Intermediário': 'bg-accent/20 text-accent',
  'Avançado': 'bg-destructive/20 text-destructive',
  'Profissional': 'bg-accent/20 text-accent',
  'Sênior': 'bg-destructive/20 text-destructive',
};

const Index = () => {
  const { completedTopics, getModuleProgress } = useProgress();
  const totalTopics = modules.reduce((acc, m) => acc + m.topics.length, 0);

  return (
    <Layout>
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-5">
          <Terminal className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-3">
          Aprenda C++ do{' '}
          <span className="text-primary">Zero ao Sênior</span>
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto text-sm lg:text-base">
          Curso completo com {totalTopics} tópicos, exemplos práticos de código e quizzes interativos.
        </p>
        <div className="flex justify-center gap-4 mt-5 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Code2 className="h-3.5 w-3.5" /> {modules.length} módulos</span>
          <span>•</span>
          <span>{totalTopics} tópicos</span>
          <span>•</span>
          <span className="text-primary">{completedTopics.length} concluídos</span>
        </div>
      </div>

      <div className="space-y-5">
        {modules.map(mod => {
          const progress = getModuleProgress(mod.id);
          return (
            <div key={mod.id} className="bg-card border border-border rounded-xl p-5 lg:p-6 hover:border-primary/20 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-secondary text-foreground text-xs font-bold px-2.5 py-0.5 rounded-full">
                      Módulo {mod.id}
                    </span>
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${levelBadge[mod.level] || 'bg-secondary text-foreground'}`}>
                      {mod.level}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-foreground">{mod.title}</h2>
                  <p className="text-muted-foreground text-sm mt-1">{mod.description}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary transition-all duration-500 rounded-full" style={{ width: `${progress}%` }} />
                </div>
                <span className="text-xs text-muted-foreground w-8 text-right">{progress}%</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-4">
                {mod.topics.map(topic => (
                  <Link
                    key={topic.id}
                    to={`/topico/${mod.id}/${topic.id}`}
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-md hover:bg-secondary transition-colors text-xs"
                  >
                    {completedTopics.includes(topic.id) ? (
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    ) : (
                      <BookOpen className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
                    )}
                    <span className="text-foreground truncate">{topic.title}</span>
                  </Link>
                ))}
              </div>

              <Link to={`/topico/${mod.id}/${mod.topics[0].id}`}>
                <Button variant="outline" size="sm" className="gap-2 text-xs">
                  Começar módulo <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Index;
