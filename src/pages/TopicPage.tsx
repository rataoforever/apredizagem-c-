import { useParams, useNavigate, Link } from 'react-router-dom';
import { modules } from '@/data/modules';
import { topicContent } from '@/data/content';
import { quizData } from '@/data/quizzes';
import CodeBlock from '@/components/CodeBlock';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, FileQuestion, Info } from 'lucide-react';
import { useProgress } from '@/hooks/useProgress';

const TopicPage = () => {
  const { moduleId, topicId } = useParams();
  const navigate = useNavigate();
  const { isCompleted } = useProgress();

  const module = modules.find(m => m.id === Number(moduleId));
  const topic = module?.topics.find(t => t.id === topicId);
  const content = topicContent[topicId || ''];

  if (!module || !topic || !content) {
    return <Layout><div className="text-center py-20 text-muted-foreground">Tópico não encontrado</div></Layout>;
  }

  const allTopics = modules.flatMap(m => m.topics.map(t => ({ moduleId: m.id, ...t })));
  const globalIndex = allTopics.findIndex(t => t.id === topicId);
  const prevTopic = globalIndex > 0 ? allTopics[globalIndex - 1] : null;
  const nextTopic = globalIndex < allTopics.length - 1 ? allTopics[globalIndex + 1] : null;
  const completed = isCompleted(topic.id);
  const hasQuiz = !!quizData[topicId || ''];

  return (
    <Layout>
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6 flex-wrap">
        <Link to="/" className="hover:text-foreground transition-colors">Início</Link>
        <span>/</span>
        <span>Módulo {module.id}</span>
        <span>/</span>
        <span className="text-foreground">{topic.title}</span>
        {completed && <span className="ml-2 text-primary text-[10px] bg-primary/10 px-2 py-0.5 rounded-full">✓ Concluído</span>}
      </div>

      <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">{topic.title}</h1>
      <p className="text-muted-foreground mb-8">{topic.description}</p>

      <div className="space-y-5">
        {content.map((block, i) => {
          switch (block.type) {
            case 'text':
              return <p key={i} className="text-foreground/90 leading-relaxed text-sm lg:text-base">{block.content}</p>;
            case 'code':
              return <CodeBlock key={i} code={block.content} title={block.title} />;
            case 'heading':
              return <h2 key={i} className="text-xl font-bold text-foreground mt-6">{block.content}</h2>;
            case 'list':
              return (
                <ul key={i} className="space-y-1.5 ml-1">
                  {block.items?.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-foreground/90">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            case 'note':
              return (
                <div key={i} className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex gap-3">
                  <Info className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/90">{block.content}</p>
                </div>
              );
            default:
              return null;
          }
        })}
      </div>

      {hasQuiz && (
        <div className="mt-10 p-6 bg-card rounded-xl border border-border text-center">
          <h3 className="text-lg font-bold text-foreground mb-2">Pronto para testar seus conhecimentos?</h3>
          <p className="text-sm text-muted-foreground mb-4">Faça o quiz sobre {topic.title}</p>
          <Button onClick={() => navigate(`/quiz/${moduleId}/${topicId}`)} className="gap-2">
            <FileQuestion className="h-4 w-4" /> Fazer Quiz
          </Button>
        </div>
      )}

      <div className="flex justify-between mt-10 gap-3">
        {prevTopic ? (
          <Button variant="outline" size="sm" onClick={() => navigate(`/topico/${prevTopic.moduleId}/${prevTopic.id}`)} className="gap-2 text-xs max-w-[45%]">
            <ArrowLeft className="h-3.5 w-3.5 flex-shrink-0" />
            <span className="truncate">{prevTopic.title}</span>
          </Button>
        ) : <div />}
        {nextTopic ? (
          <Button variant="outline" size="sm" onClick={() => navigate(`/topico/${nextTopic.moduleId}/${nextTopic.id}`)} className="gap-2 text-xs max-w-[45%]">
            <span className="truncate">{nextTopic.title}</span>
            <ArrowRight className="h-3.5 w-3.5 flex-shrink-0" />
          </Button>
        ) : <div />}
      </div>
    </Layout>
  );
};

export default TopicPage;
