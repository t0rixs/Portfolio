import { useNavigate } from "react-router-dom";
export default function Header({ location, style }: { location: string, style?: React.CSSProperties }) {
    const navigate = useNavigate();
    return (
        <header style={{
            height: 'var(--nav-height)',
            display: 'flex',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            backgroundColor: 'var(--bg-color)',
            zIndex: 10,
            borderBottom: '1px solid rgba(0,0,0,0.05)',
            ...style
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <img src={`${import.meta.env.BASE_URL}/img/logo/MIYANO_WH.png`} alt="" style={{ height: 'calc(var(--nav-height) * 2)' }} />
                <nav style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    {location === "/" ? null :
                        <a onClick={() => { navigate("/") }}>About</a>
                    }
                    {location === "/act" ?
                        <a onClick={() => { document.getElementById("acts")?.scrollIntoView({ behavior: "smooth" }) }}>Activities</a>
                        : location === "/tech" ?
                            <a onClick={() => { document.getElementById("works")?.scrollIntoView({ behavior: "smooth" }) }}>Works</a>
                            : location === "/" ?
                                <>
                                    <a onClick={() => { navigate("/tech") }}>Tech</a>
                                    <a onClick={() => { navigate("/act") }}>Activities</a>
                                </>
                                : null
                    }
                    <a onClick={() => { document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" }) }}>Contact</a>
                </nav>
            </div>
        </header>
    )
}