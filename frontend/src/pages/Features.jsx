export default function Features() {
    const features = [
    {
        title: 'Policy Interpretation',
        desc: 'Simplifies complex government documents into understandable language.'
    },
    {
        title: 'Eligibility Verification',
        desc: 'Checks eligibility conditions transparently without making decisions.'
    },
    {
        title: 'Benefit Matching',
        desc: 'Ensures no applicable benefit is overlooked.'
    },
    {
        title: 'Citizen Advocacy',
        desc: 'Guided support for applications and appeals.'
    }
    ];


    return (
        <section className="px-8 py-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {features.map((f, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold text-secondary mb-2">{f.title}</h3>
                    <p className="text-gray-600">{f.desc}</p>
                </div>
            ))}
        </section>
    );
}