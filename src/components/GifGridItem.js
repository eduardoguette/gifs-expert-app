import React from "react";

export const GifGridItem = ({ id, title, url }) => {
  return (
    <article className="card flex-col flex-grow relative max-w-max">
      <picture>
        <img
          src={url}
          alt={title}
          title={title}
          height="200"
          width="300"
          className="object-cover h-full w-full"
        />
      </picture>
      <p className="flex  absolute bottom-0 text-white left-0 p-3 h-36">
        <span className="self-end">{title}</span>
      </p>
    </article>
  );
};
