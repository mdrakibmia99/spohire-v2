const questions = [
    { title: "What Are The Hours of Operation?", ans: "Through a selection of ingenious residential projects —in which materials are immersed into a transformation, maintenance, or renovation process—, the article opens a discussion on how good architecture is durable and reusable." },
    { title: "What vehicles do you offer?", ans: "Through a selection of ingenious residential projects —in which materials are immersed into a transformation, maintenance, or renovation process—, the article opens a discussion on how good architecture is durable and reusable." },
    { title: "What if my flight or train is delayed?", ans: "Through a selection of ingenious residential projects —in which materials are immersed into a transformation, maintenance, or renovation process—, the article opens a discussion on how good architecture is durable and reusable." },
    { title: "Why do I need to enter my flight number?", ans: "Through a selection of ingenious residential projects —in which materials are immersed into a transformation, maintenance, or renovation process—, the article opens a discussion on how good architecture is durable and reusable." },
    { title: "Who do we contact for the airport pickup?", ans: "Through a selection of ingenious residential projects —in which materials are immersed into a transformation, maintenance, or renovation process—, the article opens a discussion on how good architecture is durable and reusable." },
    { title: "Where will my chauffeur meet me at airports?", ans: "Through a selection of ingenious residential projects —in which materials are immersed into a transformation, maintenance, or renovation process—, the article opens a discussion on how good architecture is durable and reusable." },
    { title: "When do I receive my booking confirmation?", ans: "Through a selection of ingenious residential projects —in which materials are immersed into a transformation, maintenance, or renovation process—, the article opens a discussion on how good architecture is durable and reusable." },
    { title: "What is the minimum time required to make a reservation?", ans: "Through a selection of ingenious residential projects —in which materials are immersed into a transformation, maintenance, or renovation process—, the article opens a discussion on how good architecture is durable and reusable." },
    { title: "How can I book my Ride?", ans: "Through a selection of ingenious residential projects —in which materials are immersed into a transformation, maintenance, or renovation process—, the article opens a discussion on how good architecture is durable and reusable." },
    { title: "How do I contact your Customer Care Team?", ans: "Through a selection of ingenious residential projects —in which materials are immersed into a transformation, maintenance, or renovation process—, the article opens a discussion on how good architecture is durable and reusable." },
]


const Question = () => {
    return (
        <div className="bg-whiteC text-blackC">
            <div>
                <h2 className="py-12 text-2x lg:text-6xl font-bold text-center ">Freequently asked question</h2>
            </div>

            <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-screen">

                {
                    questions.map((question, index) => (
                        <div key={index} className="grid divide-y divide-neutral-200 max-w-xl lg:max-w-4xl border border-whiteBtn rounded px-2 mx-auto mt-8">
                            <div className="py-5">
                                <details className="group">
                                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                        <span className="text-xs lg:text-2xl font-bold"> {question.title}</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="text-neutral-600 opacity-80 text-[11px] md:text-lg lg:text-xl mt-3 group-open:animate-fadeIn">
                                       {question.ans}
                                    </p>
                                </details>
                            </div>

                        </div>
                    ))
                }


            </div>



        </div>
    );
};

export default Question;