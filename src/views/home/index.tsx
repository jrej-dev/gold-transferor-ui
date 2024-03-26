// Next, React
import { FC } from 'react';

// Components
import { GoldTransferButton } from '../../components/GoldTransferButton';

export const HomeView: FC = ({ }) => {
  return (
    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <div className="h-[32rem] flex flex-col justify-center">
          <GoldTransferButton />
        </div>
      </div>
    </div>
  );
};
