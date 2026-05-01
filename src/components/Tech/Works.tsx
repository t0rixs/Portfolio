import { contents } from "../shared/Contents";
import { FadeInFromRight } from "../shared/components";
import { useNavigate } from "react-router-dom";

export default function Works({ worktype }: { worktype: string }) {
    const navigate = useNavigate();
    let works;
    if (worktype === "All") {
        works = contents.filter((content) => content.location === "Tech");
    } else {
        works = contents.filter((content) => content.tag.includes(worktype) && content.location === "Tech");
    }


    return (
        works.map((work) => (
            <FadeInFromRight key={work.id}>
                <div style={{ position: 'relative', height: '150px', backdropFilter: "blur(10px)", cursor: 'pointer' }} onClick={(e) => { if ((e.metaKey || e.ctrlKey) && work.url) window.open(work.url, '_blank'); else navigate(`/works/${work.id}`); }}>
                    <div style={{ position: 'relative', paddingLeft: '2rem', paddingBottom: '1rem', border: '1px solid rgba(128,128,128,0.2)', borderRadius: '8px', zIndex: 2, height: '150px' }}>

                        <h4 style={{ marginBottom: '0.5rem', fontSize: '1.6rem' }}>{work.title}</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                            {work.description}
                        </p>

                    </div>
                    <div style={{
                        position: 'absolute', top: 0, right: 0, width: '60%', height: '100%', justifyContent: 'right', zIndex: 0, overflow: 'hidden', borderRadius: '8px',
                    }}>
                        <img src={work.img} alt={work.title} style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: work.img_pos!,
                            borderRadius: '8px',
                            filter: `brightness(${work.img_brt})`,
                            maskImage: "linear-gradient(to right, transparent, black)",
                            WebkitMaskImage: "linear-gradient(to right, transparent, black)"
                        }} />
                    </div>
                </div>
            </FadeInFromRight>
        ))
    )
}