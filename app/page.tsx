import Header from '@/components/Header';
import LinkList from '@/components/LinkList';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <LinkList />
      </main>
      <Footer />
    </div>
  );
}