export interface PlayersResponse {
    page:           number;
    page_items:     number;
    pages:          number;
    active_filters: number;
    total_records:  number;
    filter_records: number;
    records:        Player[];
    url:            string;
    head_title:     string;
    sub_title:      string;
    title:          string;
    tags:           Tag[];
    text:           string;
    breadcrumbs:    Breadcrumb[];
}

export interface Breadcrumb {
    position: number;
    item:     Item;
}

export interface Item {
    "@id": string;
    name:  string;
    type:  string;
    about: About;
}

export interface About {
    name:        string;
    description: string;
}

export interface Player {
    id:                  string;
    player_id:           string;
    player_name:         string;
    player_slug:         string;
    player_picture:      string;
    age:                 string;
    position_key:        string;
    position_short_name: string;
    team_name:           string;
    team_short_name:     string;
    team_slug:           string;
    team_picture:        string;
    estimated_value:     string;
    country_id:          string;
    country_code:        string;
    country_name:        string;
    sci_skill_smg:       string;
    sci_potential_smg:   string;
    sci_skill_color:     string;
    sci_potential_color: string;
}

export interface Tag {
    type:      string;
    property?: string;
    content?:  string;
    name?:     string;
    rel?:      string;
    href?:     string;
    hreflang?: string;
}


