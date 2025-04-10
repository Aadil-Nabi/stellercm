import Link from 'next/link';

export default function HeroPage() {
    return (
        <div className="bg-white">
            <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
                        Boost your productivity. Start using our app today.
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-600">
                        To uphold the integrity and security of every system we touch. As part of this mission, we
                        ensure that every Thales CipherTrust Manager deployment is validated against industry best
                        practices and meets all necessary compliance requirements
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/login"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Get started
                        </Link>
                        <Link href="#" className="text-sm/6 font-semibold text-gray-900">
                            Learn more <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
