export const YoutubeIcon = ({
  fill,
  className,
  ...props
}: {
  fill: string;
  className?: string;
}) => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 58 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g id="ri:youtube-fill">
        <path
          id="Vector"
          d="M29.5897 8.83331C30.8802 8.83994 34.1088 8.86865 37.5405 8.99452L38.7585 9.0431C42.2119 9.19106 45.6629 9.44723 47.3763 9.88227C49.6601 10.4697 51.4533 12.1789 52.0598 14.3475C53.0265 17.7925 53.1473 24.5103 53.1618 26.1378L53.1643 26.4735V26.8577C53.1473 28.4853 53.0265 35.2052 52.0598 38.648C51.446 40.8232 49.6504 42.5347 47.3763 43.1133C45.6629 43.5483 42.2119 43.8045 38.7585 43.9524L37.5405 44.0032C34.1088 44.1269 30.8802 44.1578 29.5897 44.1622L29.0218 44.1644H28.4055C25.6747 44.149 14.2535 44.0364 10.6188 43.1133C8.33751 42.5259 6.54193 40.8166 5.93534 38.648C4.96868 35.203 4.84784 28.4853 4.83334 26.8577V26.1378C4.84784 24.5103 4.96868 17.7903 5.93534 14.3475C6.54918 12.1723 8.34476 10.4609 10.6213 9.88448C14.2535 8.95919 25.6771 8.84656 28.4079 8.83331H29.5897ZM24.1643 18.7708V34.2291L38.6643 26.5L24.1643 18.7708Z"
          fill={fill}
        />
      </g>
    </svg>
  );
};