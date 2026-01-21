import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();
    return (
        <footer id="contact" style={{
            padding: '2rem 0 2rem',
            textAlign: 'center',
            fontSize: '0.8rem',
            color: 'var(--text-secondary)',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            marginTop: '2rem',
            backdropFilter: "blur(10px)"
        }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>

                {/* Contact Info */}

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>Contact</h2>

                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a onClick={() => { navigate("/contact") }} target="_blank" style={{ transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                            <img src="https://skillicons.dev/icons?i=gmail" alt="Gmail" style={{ width: '40px', height: '40px' }} />
                        </a>
                        <a href="https://www.facebook.com/shutamix" target="_blank" rel="noopener noreferrer" style={{ transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                            <img src={`${import.meta.env.BASE_URL}img/Facebookico.png`} alt="Facebook" style={{ width: '40px', height: '40px' }} />
                        </a>
                        <a href="https://www.linkedin.com/in/%E5%BF%B8%E6%80%A9%E3%81%9F%E3%82%8B%E6%80%9D%E3%81%84-%E5%AE%AE%E9%87%8E-966a313a3/" target="_blank" rel="noopener noreferrer" style={{ transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                            <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" style={{ width: '40px', height: '40px' }} />
                        </a>
                        <a href="https://github.com/t0rixs" target="_blank" rel="noopener noreferrer" style={{ transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                            <img src="https://skillicons.dev/icons?i=github" alt="GitHub" style={{ width: '40px', height: '40px' }} />
                        </a>
                    </div>

                </div>

                <p>&copy; {new Date().getFullYear()} 宮野柊太 All rights reserved.</p>
            </div>
        </footer>
    )
}