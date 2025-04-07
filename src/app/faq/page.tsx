import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What is Thales CipherTrust Manager?",
    answer:
      "Thales CipherTrust Manager is a centralized data security platform that enables organizations to manage encryption keys, access policies, and security intelligence across diverse environments—on-premises, cloud, and hybrid..",
  },
  {
    question: "What are the key features of CipherTrust Manager?",
    answer: `Key features include:

Centralized encryption key management (KMIP, REST, PKCS#11),

Data discovery and classification,

Policy-based access controls,

Integration with cloud-native services,

Tamper-proof logging and reporting,

FIPS 140-2 Level 3 certified HSM support`,
  },
  {
    question: "How does CipherTrust Manager help with compliance?",
    answer:
      "It helps organizations meet regulatory compliance such as GDPR, HIPAA, PCI-DSS, and more by offering strong encryption, secure key management, and detailed audit trails.",
  },
  {
    question: "What environments does CipherTrust Manager support?",
    answer:
      "CipherTrust Manager supports multi-cloud, hybrid, and on-premises environments. It's compatible with major cloud providers like AWS, Azure, Google Cloud, and Oracle Cloud",
  },
  {
    question: "Is CipherTrust Manager scalable?",
    answer:
      "Yes, it is designed for enterprise scalability, supporting large-scale deployments with high availability and disaster recovery features.",
  },
  {
    question: "Can it integrate with third-party applications?",
    answer:
      "Yes, CipherTrust Manager provides APIs and connectors to integrate with third-party applications, databases, and systems, including Oracle, Microsoft SQL Server, SAP, and more.",
  },
  {
    question: "What kind of encryption does it support?",
    answer:
      "It supports a variety of encryption methods including AES, RSA, elliptic curve cryptography, and tokenization to secure sensitive data.",
  },
  {
    question: "How does it work with Hardware Security Modules (HSMs)?",
    answer:
      "CipherTrust Manager integrates seamlessly with Thales Luna HSMs and other third-party HSMs to secure and manage encryption keys in a certified, tamper-resistant environment.",
  },
  {
    question: "Is there reporting and logging available?",
    answer:
      "Yes, it provides comprehensive logging and reporting features that allow organizations to monitor access, changes, and compliance status in real-time.",
  },
  {
    question: "What type of users benefit from CipherTrust Manager?",
    answer:
      "CISOs, security architects, compliance officers, and DevOps teams across sectors like finance, healthcare, government, and retail can benefit from using CipherTrust Manager.",
  },
];

export default function Example() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Frequently asked questions
            </h2>
            <dl className="mt-16 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <Disclosure
                  key={faq.question}
                  as="div"
                  className="py-6 first:pt-0 last:pb-0"
                >
                  <dt>
                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                      <span className="text-base/7 font-semibold">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        <PlusSmallIcon
                          aria-hidden="true"
                          className="size-6 group-data-open:hidden"
                        />
                        <MinusSmallIcon
                          aria-hidden="true"
                          className="size-6 group-not-data-open:hidden"
                        />
                      </span>
                    </DisclosureButton>
                  </dt>
                  <DisclosurePanel as="dd" className="mt-2 pr-12">
                    <p className="text-base/7 text-gray-600">{faq.answer}</p>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
