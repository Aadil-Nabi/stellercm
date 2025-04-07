import FeedPage from '@/components/ui/feed';
import InputForm from '@/components/ui/input_form';
import NavigationPage from '@/components/ui/navigation_bar';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <>
      <InputForm />
      <FeedPage />
    </>
  );
}
