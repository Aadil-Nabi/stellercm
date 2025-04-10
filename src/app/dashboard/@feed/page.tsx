import { CheckIcon } from '@heroicons/react/20/solid'
import {StopIcon} from "@heroicons/react/24/solid";

const timeline = [
    {
        id: 1,
        content: 'Log in to the',
        target: 'Thales CipherTrust Manager',
        href: '#',
        icon: StopIcon,
        iconBackground: 'bg-red-600',
    },
    {
        id: 2,
        content: 'Checking Disk Encryption: ',
        target: 'Done',
        href: '#',
        icon: StopIcon,
        iconBackground: 'bg-red-600',
    },
    {
        id: 3,
        content: 'Checking Cluster Status: ',
        target: 'Done',
        href: '#',
        icon: CheckIcon,
        iconBackground: 'bg-green-600',
    },
    {
        id: 4,
        content: 'Checking Backup Status',
        target: 'Done',
        href: '#',
        icon: CheckIcon,
        iconBackground: 'bg-blue-500',
    },

]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function FeedPage() {
    return (

        <div className="container-flex bg-gray-100 ml-20 mr-20 p-20 rounded-4xl flow-root">
            <ol role="list" className="-mb-8">
                {timeline.map((event, eventIdx) => (
                    <li key={event.id}>
                        <div className="relative pb-8">
                            {eventIdx !== timeline.length - 1 ? (
                                <span aria-hidden="true" className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" />
                            ) : null}
                            <div className="relative flex space-x-3">
                                <div>
                  <span
                      className={classNames(
                          event.iconBackground,
                          'flex size-8 items-center justify-center rounded-full ring-8 ring-white',
                      )}
                  >
                    <event.icon aria-hidden="true" className="size-5 text-white" />
                  </span>
                                </div>
                                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                    <div>
                                        <p className="text-sm text-gray-500">
                                            {event.content}{' '}
                                            <a href={event.href} className="font-medium text-gray-900">
                                                {event.target}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    )
}
