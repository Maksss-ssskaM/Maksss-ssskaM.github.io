import React from "react";
import styles from "./styles.module.scss";
import cn from "classnames";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type Props = {
  children: React.ReactNode;
  className?: string;
};

type ImageMediaItem = {
  type: "image";
  element: React.ReactElement<React.ImgHTMLAttributes<HTMLImageElement>>;
  src: string;
  alt: string;
};

type VideoSource = {
  src: string;
  type?: string;
};

type VideoMediaItem = {
  type: "video";
  element: React.ReactElement<React.VideoHTMLAttributes<HTMLVideoElement>>;
  sources: VideoSource[];
  poster?: string;
};

type MediaItem = ImageMediaItem | VideoMediaItem;

type MediaSlide =
  | {
      type: "image";
      src: string;
      alt: string;
    }
  | {
      type: "video";
      sources: VideoSource[];
      poster?: string;
    };

const ContentBase: React.FC<Props> = ({ children, className }) => {
  return <div className={cn(styles.container, className)}>{children}</div>;
};

const Wrapper: React.FC<Props> = ({ children, className }) => {
  return <div className={cn(styles.wrapper, className)}>{children}</div>;
};

const isImageElement = (
  child: React.ReactNode,
): child is React.ReactElement<React.ImgHTMLAttributes<HTMLImageElement>> => {
  return React.isValidElement(child) && child.type === "img";
};

const isVideoElement = (
  child: React.ReactNode,
): child is React.ReactElement<React.VideoHTMLAttributes<HTMLVideoElement>> => {
  return React.isValidElement(child) && child.type === "video";
};

const getVideoSourceType = (src: string) => {
  const cleanSrc = src.split("?")[0].split("#")[0].toLowerCase();

  if (cleanSrc.endsWith(".webm")) return "video/webm";
  if (cleanSrc.endsWith(".ogg") || cleanSrc.endsWith(".ogv"))
    return "video/ogg";
  if (cleanSrc.endsWith(".mov")) return "video/quicktime";

  return "video/mp4";
};

const getVideoSources = (
  video: React.ReactElement<React.VideoHTMLAttributes<HTMLVideoElement>>,
): VideoSource[] => {
  const sources: VideoSource[] = [];

  if (typeof video.props.src === "string") {
    sources.push({
      src: video.props.src,
      type: getVideoSourceType(video.props.src),
    });
  }

  React.Children.forEach(video.props.children, (child) => {
    if (
      !React.isValidElement<React.SourceHTMLAttributes<HTMLSourceElement>>(
        child,
      )
    ) {
      return;
    }

    if (child.type !== "source" || typeof child.props.src !== "string") {
      return;
    }

    sources.push({
      src: child.props.src,
      type: child.props.type ?? getVideoSourceType(child.props.src),
    });
  });

  return sources;
};

const getMediaItems = (media: React.ReactNode): MediaItem[] => {
  return React.Children.toArray(media).flatMap((child): MediaItem[] => {
    if (isImageElement(child) && typeof child.props.src === "string") {
      return [
        {
          type: "image",
          element: child,
          src: child.props.src,
          alt: child.props.alt ?? "",
        },
      ];
    }

    if (isVideoElement(child)) {
      const sources = getVideoSources(child);

      if (sources.length === 0) {
        return [];
      }

      return [
        {
          type: "video",
          element: child,
          sources,
          poster: child.props.poster,
        },
      ];
    }

    return [];
  });
};

const renderMediaPreview = (item: MediaItem) => {
  if (item.type === "image") {
    return item.element;
  }

  return (
    <>
      {React.cloneElement(item.element, {
        controls: false,
        muted: true,
        playsInline: true,
        preload: item.element.props.preload ?? "metadata",
        tabIndex: -1,
      })}
      <span className={styles.playIcon} aria-hidden="true" />
    </>
  );
};

const renderSlide = (slide: MediaSlide) => {
  if (slide.type === "video") {
    return (
      <video
        className={styles.lightboxVideo}
        controls
        controlsList={"nofullscreen nodownload noremoteplayback"}
        playsInline
        preload="metadata"
        poster={slide.poster}
      >
        {slide.sources.map((source) => (
          <source key={source.src} src={source.src} type={source.type} />
        ))}
      </video>
    );
  }

  return undefined;
};

const Media: React.FC<Props> = ({ children, className }) => {
  const [index, setIndex] = React.useState(-1);
  const mediaItems = React.useMemo(() => getMediaItems(children), [children]);

  const slides: MediaSlide[] = React.useMemo(
    () =>
      mediaItems.map((item) => {
        if (item.type === "image") {
          return {
            type: "image" as const,
            src: item.src,
            alt: item.alt,
          };
        }

        return {
          type: "video" as const,
          sources: item.sources,
          poster: item.poster,
        };
      }),
    [mediaItems],
  );

  return (
    <>
      <div
        className={cn(
          styles.media,
          mediaItems.length === 1 && styles.single,
          className,
        )}
      >
        {mediaItems.map((item, mediaIndex) => (
          <button
            key={mediaIndex}
            type="button"
            className={styles.cover}
            onClick={() => setIndex(mediaIndex)}
          >
            {renderMediaPreview(item)}
          </button>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides as never}
        render={{
          slide: ({ slide }) => renderSlide(slide as MediaSlide),
        }}
      />
    </>
  );
};

export const Content = Object.assign(ContentBase, {
  Wrapper,
  Media,
});
