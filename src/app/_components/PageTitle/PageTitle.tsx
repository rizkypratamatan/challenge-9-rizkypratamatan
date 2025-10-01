import React from "react";


type PageTitleProps = {
    title: string;
    description: string;
};

const PageTitle: React.FC<PageTitleProps> = ({title, description}) => {
    return (
        <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-neutral-700">{description}</p>
        </div>
    );
};

export default PageTitle;
