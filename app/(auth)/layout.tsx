

export default function Layout({ children }: { children: React.ReactNode; }) {
    return (
        <>
            <h1 className=" m-5">Hola desde el layout</h1>
            {children}
        </>
    )
}