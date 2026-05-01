export default function Footer() {
    return (
        <footer id="contact" style={{
            padding: '1.2rem 0',
            textAlign: 'center',
            fontSize: '0.8rem',
            color: 'var(--text-secondary)',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            marginTop: '2rem',
            backdropFilter: "blur(10px)"
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                <p>&copy; {new Date().getFullYear()} 宮野柊太 All rights reserved.</p>
            </div>
        </footer>
    )
}