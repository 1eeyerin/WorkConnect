import { TWorkspaceInfo } from '@/types/workspace';
import { cva } from 'class-variance-authority';
import Link from 'next/link';
import Typography from '../Typography';

interface TopSelectProps {
  workspaceList: TWorkspaceInfo[];
  isOpen: boolean;
  onClick: () => void;
}

const TopSelect = ({ workspaceList, isOpen, onClick }: TopSelectProps) => {
  return (
    <div className={`fixed top-[50px] z-10 inset-0 ${isOpen ? 'h-full' : 'h-0'}`}>
      {isOpen && <div className="fixed top-[52px] inset-0 bg-black opacity-40" onClick={onClick} />}
      <div
        className={`fixed top-[50px] left-0 right-0 bg-white transition-all duration-200 
          ${isOpen ? 'max-h-[172px]' : 'max-h-0'}           
          rounded-b-[6px] overflow-y-scroll snap-none`}
      >
        <div className="flex flex-col p-[12px] gap-[16px]">
          {workspaceList.map((workspace) => (
            <Link href={`/${workspace.id}`}>
              <Typography variant="Subtitle16px" color="grey500" className="ml-[8px">
                {workspace.name}
              </Typography>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSelect;

const topSelect = cva({});
