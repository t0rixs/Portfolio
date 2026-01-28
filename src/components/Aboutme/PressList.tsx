import { contents as pressData } from "../shared/press_release";
import { FadeInFromLeft } from "../shared/components";
import { contents, Content } from "../shared/Contents";




export default function PressList({ setDetailWork }: { setDetailWork: (work: Content | null, e?: React.MouseEvent) => void }) {
    // Sort by date descending (newest first)
    const sortedPress = [...pressData].sort((a, b) => b.create_at.getTime() - a.create_at.getTime());



    return (
        <div style={{ padding: '0 1rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                borderLeft: '2px solid rgba(255,255,255,0.1)',
                paddingLeft: '2rem',
                position: 'relative'
            }}>
                {sortedPress.map((item, index) => (
                    <FadeInFromLeft key={index}>
                        <div style={{
                            marginBottom: '3rem',
                            position: 'relative'
                        }}>
                            {/* Dot on timeline */}
                            <div style={{
                                position: 'absolute',
                                left: '-2.4rem',
                                top: '0.4rem',
                                width: '0.8rem',
                                height: '0.8rem',
                                borderRadius: '50%',
                                backgroundColor: '#fff',
                                boxShadow: '0 0 10px rgba(255,255,255,0.5)'
                            }} />

                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.5rem'
                            }}>
                                <span style={{
                                    fontSize: '0.9rem',
                                    opacity: 0.7,
                                    fontFamily: 'monospace',
                                    marginTop: '0.2rem'
                                }}>
                                    {`${item.create_at.getFullYear()}年${item.create_at.getMonth()}月${item.create_at.getDate()}日`}
                                </span>

                                <h4 style={{
                                    fontSize: '1.2rem',
                                    fontWeight: '200',
                                    margin: 0,
                                    lineHeight: '1.5'
                                }}>
                                    {item.title}
                                </h4>

                                {item.connection && (
                                    <span
                                        style={{
                                            display: 'inline-block',
                                            padding: '0.2rem 0.6rem',
                                            borderRadius: '4px',
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                            fontSize: '0.8rem',
                                            width: 'fit-content',
                                            marginTop: '0.3rem',
                                            color: 'rgba(255,255,255,0.8)'
                                        }} onClick={() => {
                                            const targetWork = contents.find(c => c.title === item.connection)
                                            if (targetWork) {
                                                setDetailWork(targetWork)
                                            }
                                        }}>
                                        Related: {item.connection}

                                    </span>
                                )}
                            </div>
                        </div>
                    </FadeInFromLeft>
                ))}
            </div>
        </div>
    );
}
