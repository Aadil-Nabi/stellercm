import NavigationPage from '@/components/ui/navigation_bar';

export default function Example() {
  return (
    <>
      <NavigationPage />
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="max-w-4xl">
            <p className="text-base/7 font-semibold text-indigo-600">
              About us
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              On a mission to make the world a better place
            </h1>
            <p className="mt-6 text-xl/8 text-balance text-gray-700">
              At our core, we believe that security and trust are the
              foundations of a better world. Whether it's safeguarding data or
              protecting digital identities, our commitment lies in creating
              solutions that are secure, compliant, and built for the future. We
              go beyond just deploying technology — we ensure it's aligned with
              the highest standards and best practices. From rigorous compliance
              checks to real-time monitoring, our goal is to enable a safer
              digital ecosystem for everyone.
            </p>
          </div>
          <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
            <div className="lg:pr-8">
              <h2 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900">
                Our mission
              </h2>
              <p className="mt-6 text-base/7 text-gray-600">
                To uphold the integrity and security of every system we touch.
                As part of this mission, we ensure that every Thales CipherTrust
                Manager deployment is validated against industry best practices
                and meets all necessary compliance requirements. Our team
                diligently checks:
              </p>
              <p className="mt-8 text-base/7 text-gray-600">
                Service Configuration & Monitoring: We validate SNMP and system
                monitoring to ensure proactive visibility into operations.
                Security Hardening: Password strength policies, encryption
                (including full disk encryption), and secure domains are audited
                for robustness. Backup and Recovery: We confirm the status of
                backup systems, including local and remote backup servers, to
                ensure disaster readiness. Key Management: Our checks include
                reviewing cluster status, key states, and encryption health —
                including CTE (CipherTrust Transparent Encryption) and CCKM
                (CipherTrust Cloud Key Manager) functionality. System Status &
                Compliance: A holistic assessment of system health, compliance
                with organizational policies, and readiness for audits is
                conducted regularly. Through every deployment and every update,
                we’re here to ensure not just functionality, but excellence —
                because a secure system is the first step toward a better, safer
                world.
              </p>
            </div>
            <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
              <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
                <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                    className="block size-full object-cover"
                  />
                </div>
                <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                    className="block size-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                    className="block size-full object-cover"
                  />
                </div>
                <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                    className="block size-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="max-lg:mt-16 lg:col-span-1">
              <p className="text-base/7 font-semibold text-gray-500">
                The numbers
              </p>
              <hr className="mt-6 border-t border-gray-200" />
              <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                  <dt className="text-sm/6 text-gray-600">Saved</dt>
                  <dd className="order-first text-6xl font-semibold tracking-tight">
                    $<span>150</span>M
                  </dd>
                </div>
                <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                  <dt className="text-sm/6 text-gray-600">Companies Tested</dt>
                  <dd className="order-first text-6xl font-semibold tracking-tight">
                    <span>2</span>K
                  </dd>
                </div>
                <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
                  <dt className="text-sm/6 text-gray-600">Deals Closed</dt>
                  <dd className="order-first text-6xl font-semibold tracking-tight">
                    <span>1.5</span>K
                  </dd>
                </div>
                <div className="flex flex-col gap-y-2">
                  <dt className="text-sm/6 text-gray-600">
                    Non Compliant Practices detected
                  </dt>
                  <dd className="order-first text-6xl font-semibold tracking-tight">
                    <span>200</span>K
                  </dd>
                </div>
              </dl>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
