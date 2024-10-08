import CategoryImages from './CategoryImages';
export const categoryimages = [
  {
    href: '/officialstore',
    src: '/images/store.png',
    alt: 'store',
    label: '공식스토어',
  },
  {
    href: '#',
    src: '/images/beauty.png',
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
    src: '/images/man.png',
    alt: 'man',
    label: '남성의류',
  },
  {
    href: '#',
    src: '/images/bag.png',
    alt: 'bag',
    label: '백',
  },
  {
    href: '#',
    src: '/images/shose.png',
    alt: 'shose',
    label: '슈즈',
  },
  {
    href: '#',
    src: '/images/ak.png',
    alt: 'ak',
    label: '액세서리',
  },
  {
    href: '#',
    src: '/images/sport.png',
    alt: 'sport',
    label: '스포츠/레저',
  },
  {
    href: '#',
    src: '/images/life.png',
    alt: 'life',
    label: '라이프',
  },
  {
    href: '#',
    src: '/images/JAJU.png',
    alt: 'JAJU',
    label: 'JAJU',
  },
];
function MainCategoryList() {
  return (
    <main>
      <div className="grid grid-cols-5 gap-2 m-[0_20px] mb-8">
        {categoryimages.map((image, index) => (
          <CategoryImages key={index} {...image} />
        ))}
      </div>
    </main>
  );
}

export default MainCategoryList;
