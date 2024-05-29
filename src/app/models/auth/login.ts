export class CommonBtnClass{
  textColor:string='black';
  BgColor:string='black';
  icon:string='';
 pathImage:any=undefined;
 position:positions=positions.right
 border:string='none'
}
export type CommonBtnType= {
    textColor: string;
    BgColor: string;
    pathImage?: string;
    icon?: string;
    position?:positions ;
    border?:string
}

export enum positions {
  left='Left',
  right="Right",
  center="Center"
}

