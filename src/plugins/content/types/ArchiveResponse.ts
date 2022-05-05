export interface ArchiveResponse<T> {
	meta: ArchiveResponseMeta;
	entries: T[];
	page_id: string;
	post_type: PostTypeEnum;
	meta_page_id: string;
	_paging: ArchiveResponsePaging
}

export interface ArchiveResponsePaging {
	total: number;
	totalPages: number;
	links: Links;
	next: Next;
	prev: Next;
}

export interface Links {
	prev: string;
	next: string;
}

export interface Next {
	_options: Options;
	transport: Params;
	_params: Params;
	_supportedMethods: string[];
	_path: Params;
}

export interface Options {
	endpoint: string;
}

export interface Params {
}



export enum PostTypeEnum {
	Post = "post",
}

export interface YoastHeadJSON {
	title: string;
	robots: Robots;
	canonical: string;
	og_locale: OgLocale;
	og_type: OgType;
	og_title: string;
	og_description?: string;
	og_url: string;
	og_site_name: OgSiteName;
	article_publisher: string;
	article_published_time: string;
	article_modified_time: string;
	og_image: OgImage[];
	twitter_card: TwitterCard;
	twitter_creator: Twitter;
	twitter_site: Twitter;
	twitter_misc: TwitterMisc;
	schema: YoastHeadJSONSchema;
	description?: string;
}

export interface OgImage {
	width: number;
	height: number;
	url: string;
	type: any;
}

export enum OgLocale {
	EsES = "es_ES",
}

export enum OgSiteName {
	LaPometaAgencia = "LaPometa Agencia",
}

export enum OgType {
	Article = "article",
}

export interface Robots {
	index: Index;
	follow: Follow;
	"max-snippet": MaxSnippet;
	"max-image-preview": MaxImagePreview;
	"max-video-preview": MaxVideoPreview;
}

export enum Follow {
	Follow = "follow",
}

export enum Index {
	Index = "index",
}

export enum MaxImagePreview {
	MaxImagePreviewLarge = "max-image-preview:large",
}

export enum MaxSnippet {
	MaxSnippet1 = "max-snippet:-1",
}

export enum MaxVideoPreview {
	MaxVideoPreview1 = "max-video-preview:-1",
}

export interface YoastHeadJSONSchema {
	"@context": string;
	"@graph": PurpleGraph[];
}

export interface PurpleGraph {
	"@type": GraphType;
	"@id": string;
	name?: string;
	url?: string;
	sameAs?: string[];
	logo?: Logo;
	image?: Logo;
	description?: string;
	publisher?: Breadcrumb;
	potentialAction?: PotentialAction[];
	inLanguage?: any;
	contentUrl?: string;
	width?: number;
	height?: number;
	isPartOf?: Breadcrumb;
	primaryImageOfPage?: Breadcrumb;
	datePublished?: string;
	dateModified?: string;
	breadcrumb?: Breadcrumb;
	itemListElement?: ItemListElement[];
	author?: Breadcrumb;
	headline?: string;
	mainEntityOfPage?: Breadcrumb;
	wordCount?: number;
	commentCount?: number;
	thumbnailUrl?: string;
	articleSection?: string[];
	caption?: string;
}

export enum GraphType {
	Article = "Article",
	BreadcrumbList = "BreadcrumbList",
	ImageObject = "ImageObject",
	Organization = "Organization",
	Person = "Person",
	WebPage = "WebPage",
	WebSite = "WebSite",
}

export interface Breadcrumb {
	"@id": string;
}

export interface Logo {
	"@id": string;
	"@type"?: GraphType;
	inLanguage?: any;
	url?: string;
	contentUrl?: string;
	caption?: any;
	width?: number;
	height?: number;
}

export interface ItemListElement {
	"@type": ItemListElementType;
	position: number;
	name: string;
	item?: Item;
}

export enum ItemListElementType {
	ListItem = "ListItem",
}

export enum Item {
	Empty = "/",
}

export interface PotentialAction {
	"@type": PotentialActionType;
	target: string[] | TargetClass;
	"query-input"?: QueryInput;
	name?: PotentialActionName;
}

export enum PotentialActionType {
	CommentAction = "CommentAction",
	ReadAction = "ReadAction",
	SearchAction = "SearchAction",
}

export enum PotentialActionName {
	Comment = "Comment",
}

export enum QueryInput {
	RequiredNameSearchTermString = "required name=search_term_string",
}

export interface TargetClass {
	"@type": TargetType;
	urlTemplate: URLTemplate;
}

export enum TargetType {
	EntryPoint = "EntryPoint",
}

export enum URLTemplate {
	HTTPSWWWLapometaCOMSSearchTermString = "https://www.lapometa.com/?s={search_term_string}",
}

export enum TwitterCard {
	SummaryLargeImage = "summary_large_image",
}

export enum Twitter {
	LaPometaAgencia = "@LaPometaAgencia",
}

export interface TwitterMisc {
	"Escrito por": string;
	"Tiempo de lectura": string;
}

export interface ArchiveResponseMeta {
	title: string;
	description: string;
	robots: Robots;
	canonical: string;
	og_locale: OgLocale;
	og_type: OgType;
	og_title: string;
	og_description: string;
	og_url: string;
	og_site_name: OgSiteName;
	article_publisher: string;
	article_modified_time: string;
	og_image: OgImage[];
	twitter_card: TwitterCard;
	twitter_site: Twitter;
	schema: MetaSchema;
}

export interface MetaSchema {
	"@context": string;
	"@graph": FluffyGraph[];
}

export interface FluffyGraph {
	"@type": GraphType;
	"@id": string;
	name?: string;
	url?: string;
	sameAs?: string[];
	logo?: Logo;
	image?: Breadcrumb;
	description?: string;
	publisher?: Breadcrumb;
	potentialAction?: PotentialAction[];
	inLanguage?: any;
	contentUrl?: string;
	width?: number;
	height?: number;
	caption?: string;
	isPartOf?: Breadcrumb;
	primaryImageOfPage?: Breadcrumb;
	datePublished?: string;
	dateModified?: string;
	breadcrumb?: Breadcrumb;
	itemListElement?: ItemListElement[];
}
