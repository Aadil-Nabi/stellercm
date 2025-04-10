export default function DashboardLayout({
                                            children,
                                            feed,
                                            stat,

                                        }: {
    children: React.ReactNode
    feed: React.ReactNode
    stat: React.ReactNode
}) {
    return (
        <>
            <div className="container-flex  m-22">
                {children}
                {feed}
                <br/>
                {stat}
            </div>

        </>
    )
}