import HeroPage from '@/components/ui/hero';
import Stats from "@/components/ui/stats";
import AppStats from "@/components/ui/app_stats";

export default function HomePage() {
    return (
        <>
            <HeroPage/>
            <AppStats/>
            <Stats/>
        </>
    );
}
