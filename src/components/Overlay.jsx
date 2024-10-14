// Overlay.js
import { Scroll } from "@react-three/drei";
import content from "../constants/index";

const Section = ({ children, right }) => {
    return (
        <section
            className={`h-screen flex flex-col justify-center p-10 ${
                right ? "items-end" : "items-start"
            }`}
        >
            <div className="w-1/2 flex items-center justify-center">
                <div className="max-w-sm w-full">
                    <div className="bg-white rounded-lg px-8 py-12">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
};

const renderDescription = (description) => {
    if (Array.isArray(description)) {
        return (
            <ul>
                {description.map((item, index) =>
                    typeof item === 'string' ? (
                        <li key={index}>{item}</li>
                    ) : (
                        // If it's an object with title and description, handle accordingly
                        <li key={index}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </li>
                    )
                )}
            </ul>
        );
    }
    if (typeof description === 'object' && description !== null) {
        // Handle any other cases where description might be an object
        return (
            <>
                <h3>{description.title}</h3>
                <p>{description.description}</p>
            </>
        );
    }
    // Default case: assume description is a string
    return <p>{description}</p>;
};

export const Overlay = () => {
    return (
        <Scroll html>
            <div className="w-screen">
                {content.map((item, index) => (
                    <Section key={index} right={index % 2 !== 0}>
                        <h1>{item.title}</h1>
                        {renderDescription(item.description)}
                    </Section>
                ))}
            </div>
        </Scroll>
    );
};
