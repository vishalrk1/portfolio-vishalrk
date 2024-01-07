export interface Route {
  icon: React.ReactElement;
  label: string;
  active?: boolean;
  refObj: React.RefObject<any>;
}
