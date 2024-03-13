export const TikTokIcon = ({
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
      <g id="ic:baseline-tiktok">
        <path
          id="Vector"
          d="M40.117 12.8525C38.4651 11.1292 37.5547 8.916 37.5554 6.625H30.0879V34.0083C30.0303 35.4902 29.3456 36.8938 28.1781 37.9236C27.0106 38.9534 25.4514 39.529 23.8287 39.5292C20.397 39.5292 17.5454 36.9675 17.5454 33.7875C17.5454 29.9892 21.557 27.1404 25.6895 28.3108V21.3325C17.352 20.3167 10.0537 26.235 10.0537 33.7875C10.0537 41.1413 16.7237 46.375 23.8045 46.375C31.3929 46.375 37.5554 40.7437 37.5554 33.7875V19.8971C40.5835 21.8843 44.219 22.9504 47.947 22.9446V16.1208C47.947 16.1208 43.4037 16.3196 40.117 12.8525Z"
          fill={fill}
        />
      </g>
    </svg>
  );
};
