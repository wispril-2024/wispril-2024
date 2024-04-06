export const TwitterIcon = ({
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
      <g id="mdi:twitter">
        <path
          id="Vector"
          d="M54.2784 13.25C52.4176 14.0229 50.4118 14.5308 48.3334 14.7737C50.4601 13.6033 52.1034 11.7483 52.8768 9.5179C50.8709 10.6221 48.6476 11.395 46.3034 11.8366C44.3942 9.93748 41.7118 8.83331 38.6668 8.83331C32.9876 8.83331 28.3476 13.0733 28.3476 18.3071C28.3476 19.0579 28.4443 19.7866 28.6134 20.4712C20.0101 20.0737 12.3493 16.2975 7.25009 10.5779C6.35592 11.9691 5.84842 13.6033 5.84842 15.3258C5.84842 18.6162 7.66092 21.5312 10.4643 23.1875C8.74842 23.1875 7.15342 22.7458 5.75176 22.0833V22.1496C5.75176 26.7429 9.32842 30.5854 14.0651 31.4466C12.5443 31.8269 10.9478 31.8799 9.40092 31.6012C10.0573 33.4838 11.3428 35.131 13.0767 36.3115C14.8106 37.4919 16.9058 38.146 19.0676 38.1821C15.403 40.833 10.8606 42.266 6.18676 42.2454C5.36509 42.2454 4.54342 42.2012 3.72176 42.1129C8.31342 44.8071 13.7751 46.375 19.6234 46.375C38.6668 46.375 49.1309 31.9325 49.1309 19.4112C49.1309 18.9916 49.1309 18.5941 49.1068 18.1746C51.1367 16.8496 52.8767 15.1712 54.2784 13.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
};
