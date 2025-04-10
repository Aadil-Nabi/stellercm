const items = [
    {
        id: 1,
    description: "kdsbnkbcsdhcbkjskdhbchkdbcjhdsbchkbdkvjbhkbfhhskdjnckdbkhcb"
    },
    {
        id: 2,
        description: "kdsbnkbcsdhcbkj"
    },
    {
        id: 3,
        description: "kdsbnkbcsdhcbkj"
    },
    {
        id: 4,
        description: "kdsbnkbcsdhcbkj"
    },
    // More items...
]

export default function FinalStat() {
    return (
        <div className="container-flex bg-white-200 rounded-lg m-10">

        <ul role="list" className="space-y-3">
            {items.map((item) => (
                <li key={item.id} className="overflow-hidden rounded-md bg-white px-6 py-4 shadow-lg">
                    {item.description}
                </li>
            ))}
        </ul>
        </div>

    )
}
