export interface SpellFilter {
  name: string;
}

export interface ISpellDetail {
  index: string;
  name: string;
  url: string;
  attack_type: string;
  casting_time: string;
  classes: [
    {
      index: string;
      name: string;
      url: string;
    },
  ];
  components: string[];
  concentration: boolean;
  damage: {
    damage_at_character_level: any;
    damage_type: {
      index: string;
      name: string;
      url: string;
    };
  };
  dc: {
    dc_success: string;
    dc_type: {
      index: string;
      name: string;
      url: string;
    };
  };
  desc: string[];
  duration: string;
  higher_level: string[];
  level: string;
  range: string;
  ritual: boolean;
  school: {
    index: string;
    name: string;
    url: string;
  };
  subclasses: [
    {
      index: string;
      name: string;
      url: string;
    },
  ];
}
