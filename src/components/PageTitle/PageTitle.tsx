import React from "react";


type Props = {
    title: string;
    description: string;
};

const PageTitle: React.FC<Props> = ({title, description}) => {
    return (
        <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-neutral-700">{description}</p>
        </div>
    );
};

export default PageTitle;
