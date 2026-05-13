import { TransferActionCard } from './TransferActionCard';

const UserInfo = [
  {
    id: 1,
    src: 'https://media.istockphoto.com/id/483934084/photo/outdoors-portrait-of-beautiful-young-brunette-girl.jpg?s=612x612&w=0&k=20&c=2VljR69KZM8O08TQ53MfJU72ZobRNAqzQiVa84jen60=',
    titleChild: 'Masooma',
    subChild: 'CEO',
  },
  {
    id: 2,
    src: 'https://reductress.com/wp-content/uploads/2019/06/petite-woman-1-820x500.jpg',
    titleChild: 'Zarafshan',
    subChild: 'director',
  },
  {
    id: 3,
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXwPIAV-12_eByIhoNCaJuUqmbv6FK5bWU7w&s',
    titleChild: 'Mostafa',
    subChild: 'designer',
  },
  {
    id: 4,
    src: 'https://media.istockphoto.com/id/483934084/photo/outdoors-portrait-of-beautiful-young-brunette-girl.jpg?s=612x612&w=0&k=20&c=2VljR69KZM8O08TQ53MfJU72ZobRNAqzQiVa84jen60=',
    titleChild: 'Livia bator',
    subChild: 'CEO',
  },
  {
    id: 5,
    src: 'https://reductress.com/wp-content/uploads/2019/06/petite-woman-1-820x500.jpg',
    titleChild: 'randy press',
    subChild: 'director',
  },
  {
    id: 6,
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXwPIAV-12_eByIhoNCaJuUqmbv6FK5bWU7w&s',
    titleChild: 'workman',
    subChild: 'designer',
  },
];

export default {
  title: 'Components/TransferActionCard',
  component: TransferActionCard,
  args: { users: UserInfo },
};

export function Default() {
  return <TransferActionCard users={UserInfo} />;
}
