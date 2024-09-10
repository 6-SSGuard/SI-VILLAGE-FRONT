import Images from './Images';

function ButtonList() {
  const images = [
    {
      href: '#',
      src: '/store.png',
      alt: 'store',
      label: '공식스토어',
    },
    {
      href: '#',
      src: '/beauty.png',
      alt: 'beauty',
      label: '뷰티',
    },
    {
      href: '#',
      src: '/woman.png',
      alt: 'woman',
      label: '여성의류',
    },
    {
      href: '#',
      src: '/man.png',
      alt: 'man',
      label: '남성의류',
    },
    {
      href: '#',
      src: '/bag.png',
      alt: 'bag',
      label: '백',
    },
    {
      href: '#',
      src: '/shose.png',
      alt: 'shose',
      label: '슈즈',
    },
    {
      href: '#',
      src: '/ak.png',
      alt: 'ak',
      label: '액세서리',
    },
    {
      href: '#',
      src: '/sport.png',
      alt: 'sport',
      label: '스포츠/레저',
    },
    {
      href: '#',
      src: '/life.png',
      alt: 'life',
      label: '라이프',
    },
    {
      href: '#',
      src: '/JAJU.png',
      alt: 'JAJU',
      label: 'JAJU',
    },
  ];
  return (
    <main>
      <div className="grid grid-cols-5 gap-2 m-[0_20px] mb-8">
        {images.map((image, index) => (
          <Images key={index} {...image} />
        ))}
      </div>
    </main>
  );
}

export default ButtonList;
