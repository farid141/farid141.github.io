export const Logo = ({src}) => {
  return src.includes('.') ? 
    <img src={`/logo/${src}`} title={src.split('.')[0]} className=" ci-2x"/>:
    <i className={`ci ci-${src} ci-2x`} title={src} />
};
