/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface LoginRequest {
  /** @format tel */
  phone: string;

  /** @format int32 */
  loginCode?: number;
}

export interface Reason {
  message?: string | null;
  metadata?: Record<string, any>;
}

export interface Error {
  message?: string | null;
  metadata?: Record<string, any>;
  reasons?: Error[] | null;
}

export interface Success {
  message?: string | null;
  metadata?: Record<string, any>;
}

export interface Tokens {
  accesstoken?: string | null;
  refreshToken?: string | null;

  /** @format date-time */
  refreshTokenExpirationDate?: string;
}

/**
 * @format int32
 */
export type EUser = 0 | 1 | 2;

/**
 * @format int32
 */
export type EDay = 0 | 1 | 2 | 3 | 4 | 5 | 6;

/**
 * @format int32
 */
export type ETime = 0 | 1 | 2;

export interface BuildingOwnerDto {
  phone?: string | null;
  name?: string | null;
  email?: string | null;
  avatar?: string | null;
}

export interface BuildingDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  createdAt?: string;
  name?: string | null;

  /** @format uuid */
  userId?: string;
  address?: string | null;

  /** @format double */
  latitude?: number | null;

  /** @format double */
  longitude?: number | null;

  /** @format int32 */
  plaque?: number;
  postalCode?: string | null;
  description?: string | null;
  weekDay?: EDay;
  weekDayPersian?: string | null;
  timeOfDay?: ETime;
  timeOfDayPersian?: string | null;

  /** @format uuid */
  cityId?: string;
  cityName?: string | null;

  /** @format date-time */
  updatedAt?: string;
  user?: BuildingOwnerDto;
}

export interface UserDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  createdAt?: string;
  phone?: string | null;
  name?: string | null;
  email?: string | null;
  avatar?: string | null;

  /** @format int32 */
  credit?: number;
  type?: EUser;
  typePersian?: string | null;
  isActive?: boolean;
  buildings?: BuildingDto[] | null;
}

export interface LoginDto {
  tokens?: Tokens;
  user?: UserDto;
}

export interface LoginDtoResult {
  isFailed?: boolean;
  isSuccess?: boolean;
  reasons?: Reason[] | null;
  errors?: Error[] | null;
  successes?: Success[] | null;
  valueOrDefault?: LoginDto;
  value?: LoginDto;
}

export interface Result {
  isFailed?: boolean;
  isSuccess?: boolean;
  reasons?: Reason[] | null;
  errors?: Error[] | null;
  successes?: Success[] | null;
}

export interface SendCodeRequest {
  /** @format tel */
  phone: string;
}

export interface SendCodeDto {
  /** @format int32 */
  code?: number;
  isNewUser?: boolean;
}

export interface SendCodeDtoResult {
  isFailed?: boolean;
  isSuccess?: boolean;
  reasons?: Reason[] | null;
  errors?: Error[] | null;
  successes?: Success[] | null;
  valueOrDefault?: SendCodeDto;
  value?: SendCodeDto;
}

export interface RefreshRequest {
  refreshToken: string;
}

export interface TokensResult {
  isFailed?: boolean;
  isSuccess?: boolean;
  reasons?: Reason[] | null;
  errors?: Error[] | null;
  successes?: Success[] | null;
  valueOrDefault?: Tokens;
  value?: Tokens;
}

export interface CreateBuildingRequest {
  name: string;
  address: string;

  /**
   * @format double
   * @min -90
   * @max 90
   */
  latitude: number;

  /** @format int32 */
  plaque?: number;

  /**
   * @format double
   * @min -180
   * @max 180
   */
  longitude: number;
  postalCode: string;
  description?: string | null;
  weekDay?: EDay;
  timeOfDay?: ETime;

  /** @format uuid */
  cityId?: string;
}

export interface BuildingDtoResult {
  isFailed?: boolean;
  isSuccess?: boolean;
  reasons?: Reason[] | null;
  errors?: Error[] | null;
  successes?: Success[] | null;
  valueOrDefault?: BuildingDto;
  value?: BuildingDto;
}

export interface DeleteBuildingRequest {
  /** @format uuid */
  buildingId?: string;
}

export interface BooleanResult {
  isFailed?: boolean;
  isSuccess?: boolean;
  reasons?: Reason[] | null;
  errors?: Error[] | null;
  successes?: Success[] | null;
  valueOrDefault?: boolean;
  value?: boolean;
}

export interface UpdateBuildingRequest {
  /** @format uuid */
  buildingId?: string;
  name?: string | null;
  address?: string | null;

  /**
   * @format double
   * @min -90
   * @max 90
   */
  latitude?: number | null;

  /**
   * @format double
   * @min -180
   * @max 180
   */
  longitude?: number | null;
  postalCode?: string | null;
  description?: string | null;

  /** @format int32 */
  plaque?: number | null;
  weekDay?: EDay;
  timeOfDay?: ETime;

  /** @format uuid */
  cityId?: string | null;
}

export enum EOrderBy {
  ASC = "ASC",
  DESC = "DESC",
}

export interface BuildingDtoListWithTotal {
  /** @format int32 */
  total?: number;
  data?: BuildingDto[] | null;
}

export interface BuildingDtoListWithTotalResult {
  isFailed?: boolean;
  isSuccess?: boolean;
  reasons?: Reason[] | null;
  errors?: Error[] | null;
  successes?: Success[] | null;
  valueOrDefault?: BuildingDtoListWithTotal;
  value?: BuildingDtoListWithTotal;
}

export interface City {
  /** @format uuid */
  id?: string;
  code?: string | null;
  name?: string | null;

  /** @format uuid */
  provinceId?: string;
}

export interface CityIEnumerableResult {
  isFailed?: boolean;
  isSuccess?: boolean;
  reasons?: Reason[] | null;
  errors?: Error[] | null;
  successes?: Success[] | null;
  valueOrDefault?: City[] | null;
  value?: City[] | null;
}

/**
 * @format int32
 */
export type ERequestStatus = 0 | 1 | 2 | 3;

export interface PickUpDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  createdAt?: string;

  /** @format uuid */
  buildingId?: string;
  building?: BuildingDto;

  /** @format uuid */
  userId?: string;
  user?: BuildingOwnerDto;

  /** @format date-time */
  acceptedTime?: string | null;

  /** @format uuid */
  driverId?: string | null;
  driverMessage?: string | null;
  status?: ERequestStatus;
  statusPersian?: string | null;

  /** @format float */
  glassWeight?: number;

  /** @format float */
  metalWeight?: number;

  /** @format float */
  paperWeight?: number;

  /** @format float */
  plasticWeight?: number;

  /** @format float */
  mixedWeight?: number;

  /** @format float */
  allWeight?: number;
  driverDescription?: string | null;
  imageUrl?: string | null;

  /** @format date-time */
  receivedTime?: string | null;
  isSpecial?: boolean;
  specialDescription?: string | null;
  specialImageUrl?: string | null;
  specialWeekDay?: EDay;
}

export interface PickUpDtoResult {
  isFailed?: boolean;
  isSuccess?: boolean;
  reasons?: Reason[] | null;
  errors?: Error[] | null;
  successes?: Success[] | null;
  valueOrDefault?: PickUpDto;
  value?: PickUpDto;
}

export interface ProcedurePickUpDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  createdAt?: string;

  /** @format uuid */
  buildingId?: string;
  building?: BuildingDto;

  /** @format uuid */
  userId?: string;
  user?: BuildingOwnerDto;

  /** @format uuid */
  driverId?: string | null;
  driver?: BuildingOwnerDto;
  driverMessage?: string | null;
  status?: ERequestStatus;

  /** @format date-time */
  acceptedTime?: string | null;

  /** @format float */
  glassWeight?: number;

  /** @format float */
  metalWeight?: number;

  /** @format float */
  paperWeight?: number;

  /** @format float */
  plasticWeight?: number;

  /** @format float */
  mixedWeight?: number;

  /** @format float */
  allWeight?: number;
  driverDescription?: string | null;
  imageUrl?: string | null;

  /** @format date-time */
  receivedTime?: string | null;
  isSpecial?: boolean;
  specialDescription?: string | null;
  specialImageUrl?: string | null;
  specialWeekDay?: EDay;
}

export interface ProcedurePickUpDtoListWithTotal {
  /** @format int32 */
  total?: number;
  data?: ProcedurePickUpDto[] | null;
}

export interface ProcedurePickUpDtoListWithTotalResult {
  isFailed?: boolean;
  isSuccess?: boolean;
  reasons?: Reason[] | null;
  errors?: Error[] | null;
  successes?: Success[] | null;
  valueOrDefault?: ProcedurePickUpDtoListWithTotal;
  value?: ProcedurePickUpDtoListWithTotal;
}

export interface AcceptPickUpRequest {
  /** @format uuid */
  buildingId: string;
  driverMessage?: string | null;
}

export interface AcceptSpecialPickUpRequest {
  /** @format uuid */
  pickUpId: string;
  driverMessage?: string | null;
}

export interface Province {
  /** @format uuid */
  id?: string;
  code?: string | null;
  name?: string | null;
}

export interface ProvinceIEnumerableResult {
  isFailed?: boolean;
  isSuccess?: boolean;
  reasons?: Reason[] | null;
  errors?: Error[] | null;
  successes?: Success[] | null;
  valueOrDefault?: Province[] | null;
  value?: Province[] | null;
}

export type GetUserInfoRequest = object;

export interface UserDtoResult {
  isFailed?: boolean;
  isSuccess?: boolean;
  reasons?: Reason[] | null;
  errors?: Error[] | null;
  successes?: Success[] | null;
  valueOrDefault?: UserDto;
  value?: UserDto;
}

export type GetUsersByAdminRequest = object;

export interface UserDtoListResult {
  isFailed?: boolean;
  isSuccess?: boolean;
  reasons?: Reason[] | null;
  errors?: Error[] | null;
  successes?: Success[] | null;
  valueOrDefault?: UserDto[] | null;
  value?: UserDto[] | null;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Enviro Api
 * @version v1
 * @contact nitenviro <nitenviro@gmail.com> (https://www.nitenviro.ir/)
 *
 * An ASP.NET CORE Rest-api for the Enviro project
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  auth = {
    /**
     * @description Sample request: POST /Auth/Login { "Phone": "09111111111", "LoginCode":"12345" }
     *
     * @tags Auth
     * @name LoginCreate
     * @summary ورود
     * @request POST:/Auth/Login
     * @secure
     */
    loginCreate: (data: LoginRequest, params: RequestParams = {}) =>
      this.request<LoginDtoResult, Result>({
        path: `/Auth/Login`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Sample request: POST /Auth/SendCode { "phone":"09111111111" }
     *
     * @tags Auth
     * @name SendCodeCreate
     * @summary ارسال کد ورود
     * @request POST:/Auth/SendCode
     * @secure
     */
    sendCodeCreate: (data: SendCodeRequest, params: RequestParams = {}) =>
      this.request<SendCodeDtoResult, Result>({
        path: `/Auth/SendCode`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Sample request: POST /Auth/Refresh { "RefreshToken":"7808ae98-424a-4a65-821c-93243bf1069b" }
     *
     * @tags Auth
     * @name RefreshCreate
     * @summary بروزرسانی رفرش توکن
     * @request POST:/Auth/Refresh
     * @secure
     */
    refreshCreate: (data: RefreshRequest, params: RequestParams = {}) =>
      this.request<TokensResult, Result>({
        path: `/Auth/Refresh`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  building = {
    /**
     * @description Sample request: POST /Building { "name": "ساختمان سینا", "address": "بابل خیابان شریعتی کوچه راهنمایی ساختمان سینا پلاک ۱", "latitude": 52.6431, "longitude": 36.51748, "postalCode": "1234567890", "plaque":1, "description": "خونمون تو بابل", "weekDay": 1, "timeOfDay": 1, "CityId":"83E3B69A-3A85-4629-97F4-B7540C4433D4" }
     *
     * @tags Building
     * @name BuildingCreate
     * @summary ایجاد ساختمان جدید
     * @request POST:/Building
     * @secure
     */
    buildingCreate: (data: CreateBuildingRequest, params: RequestParams = {}) =>
      this.request<BuildingDtoResult, Result>({
        path: `/Building`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Sample request: DELETE /Building { "BuildingId":"4680145a-ed69-43a5-9398-7da5292cda78" }
     *
     * @tags Building
     * @name BuildingDelete
     * @summary حذف ساختمان
     * @request DELETE:/Building
     * @secure
     */
    buildingDelete: (data: DeleteBuildingRequest, params: RequestParams = {}) =>
      this.request<BooleanResult, Result>({
        path: `/Building`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Sample request: PATCH /Building { "BuildingId":"4680145a-ed69-43a5-9398-7da5292cda78" "name": "ساختمان سینا", "address": "بابل خیابان شریعتی کوچه راهنمایی ساختمان سینا پلاک ۱", "latitude": 52.6431, "longitude": 36.51748, "postalCode": "1234567890", "description": "خونمون تو بابل", "weekDay": 1, "timeOfDay": 1, "CityId":"83E3B69A-3A85-4629-97F4-B7540C4433D4" }
     *
     * @tags Building
     * @name BuildingPartialUpdate
     * @summary بروزرسانی ساختمان
     * @request PATCH:/Building
     * @secure
     */
    buildingPartialUpdate: (data: UpdateBuildingRequest, params: RequestParams = {}) =>
      this.request<BuildingDtoResult, Result>({
        path: `/Building`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Sample request: GET /Building/MyBuildings { }
     *
     * @tags Building
     * @name MyBuildingsList
     * @summary لیست ساختمان های من (‌کاربر معمولی)
     * @request GET:/Building/MyBuildings
     * @secure
     */
    myBuildingsList: (
      query?: {
        WeekDay?: EDay;
        TimeOfDay?: ETime;
        CityId?: string | null;
        Page?: number;
        PageSize?: number;
        SortBy?: string | null;
        OrderBy?: EOrderBy;
      },
      params: RequestParams = {},
    ) =>
      this.request<BuildingDtoListWithTotalResult, Result>({
        path: `/Building/MyBuildings`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  admin = {
    /**
     * @description Sample request: GET /Building { }
     *
     * @tags Building
     * @name BuildingList
     * @summary لیست همه ساختمان ها با کوئری
     * @request GET:/Admin/Building
     * @secure
     */
    buildingList: (
      query?: {
        WeekDay?: EDay;
        TimeOfDay?: ETime;
        CityId?: string | null;
        SourceLatitude?: number | null;
        SourceLongitude?: number | null;
        Page?: number;
        PageSize?: number;
        SortBy?: string | null;
        OrderBy?: EOrderBy;
      },
      params: RequestParams = {},
    ) =>
      this.request<BuildingDtoListWithTotalResult, Result>({
        path: `/Admin/Building`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserUpdateUserPartialUpdate
     * @request PATCH:/Admin/User/UpdateUser
     * @secure
     */
    userUpdateUserPartialUpdate: (
      data: { UserId: string; Name?: string | null; Email?: string | null; Avatar?: File | null },
      params: RequestParams = {},
    ) =>
      this.request<UserDtoResult, Result>({
        path: `/Admin/User/UpdateUser`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserList
     * @request GET:/Admin/User
     * @secure
     */
    userList: (query?: { userId?: string }, params: RequestParams = {}) =>
      this.request<UserDtoResult, Result>({
        path: `/Admin/User`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserAllUsersList
     * @request GET:/Admin/User/AllUsers
     * @secure
     */
    userAllUsersList: (query?: { request?: GetUsersByAdminRequest }, params: RequestParams = {}) =>
      this.request<UserDtoListResult, Result>({
        path: `/Admin/User/AllUsers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  driver = {
    /**
     * @description Sample request: GET /Building/TodayBuildings { }
     *
     * @tags Building
     * @name BuildingTodayBuildingsList
     * @summary لیست ساختمان هایی که امروز درخواست جمع آوردی دارند
     * @request GET:/Driver/Building/TodayBuildings
     * @secure
     */
    buildingTodayBuildingsList: (
      query?: {
        CityId?: string | null;
        SourceLatitude?: number | null;
        SourceLongitude?: number | null;
        Page?: number;
        PageSize?: number;
        SortBy?: string | null;
        OrderBy?: EOrderBy;
      },
      params: RequestParams = {},
    ) =>
      this.request<BuildingDtoListWithTotalResult, Result>({
        path: `/Driver/Building/TodayBuildings`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PickUp
     * @name PickUpList
     * @summary لیست جمع آوری های راننده)
     * @request GET:/Driver/PickUp
     * @secure
     */
    pickUpList: (
      query?: {
        SourceLatitude?: number | null;
        SourceLongitude?: number | null;
        IsSpecial?: boolean | null;
        Status?: ERequestStatus;
        Days?: number | null;
        Page?: number;
        PageSize?: number;
        SortBy?: string | null;
        OrderBy?: EOrderBy;
      },
      params: RequestParams = {},
    ) =>
      this.request<ProcedurePickUpDtoListWithTotalResult, Result>({
        path: `/Driver/PickUp`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PickUp
     * @name PickUpAcceptCreate
     * @summary قبول درخواست جمع آوری
     * @request POST:/Driver/PickUp/Accept
     * @secure
     */
    pickUpAcceptCreate: (data: AcceptPickUpRequest, params: RequestParams = {}) =>
      this.request<PickUpDtoResult, Result>({
        path: `/Driver/PickUp/Accept`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PickUp
     * @name PickUpSpecialList
     * @summary لیست جمع آوری های ویژه
     * @request GET:/Driver/PickUp/Special
     * @secure
     */
    pickUpSpecialList: (
      query?: {
        SourceLatitude?: number | null;
        SourceLongitude?: number | null;
        Status?: ERequestStatus;
        Page?: number;
        PageSize?: number;
        SortBy?: string | null;
        OrderBy?: EOrderBy;
      },
      params: RequestParams = {},
    ) =>
      this.request<ProcedurePickUpDtoListWithTotalResult, Result>({
        path: `/Driver/PickUp/Special`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PickUp
     * @name PickUpAcceptSpecialCreate
     * @summary قبول درخواست جمع آوری ویژه
     * @request POST:/Driver/PickUp/AcceptSpecial
     * @secure
     */
    pickUpAcceptSpecialCreate: (data: AcceptSpecialPickUpRequest, params: RequestParams = {}) =>
      this.request<PickUpDtoResult, Result>({
        path: `/Driver/PickUp/AcceptSpecial`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PickUp
     * @name PickUpCompleteCreate
     * @summary تایید دریافت
     * @request POST:/Driver/PickUp/Complete
     * @secure
     */
    pickUpCompleteCreate: (
      data: {
        Id: string;
        GlassWeight?: number;
        MetalWeight?: number;
        PaperWeight?: number;
        PlasticWeight?: number;
        MixedWeight?: number;
        DriverDescription?: string | null;
        ImageUrl?: File | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<PickUpDtoResult, Result>({
        path: `/Driver/PickUp/Complete`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PickUpHistory
     * @name PickUpHistoryList
     * @request GET:/Driver/PickUpHistory
     * @secure
     */
    pickUpHistoryList: (
      query?: {
        IsSpecial?: boolean | null;
        Days?: number | null;
        Page?: number;
        PageSize?: number;
        SortBy?: string | null;
        OrderBy?: EOrderBy;
      },
      params: RequestParams = {},
    ) =>
      this.request<ProcedurePickUpDtoListWithTotalResult, Result>({
        path: `/Driver/PickUpHistory`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  city = {
    /**
     * No description
     *
     * @tags City
     * @name CityList
     * @request GET:/City
     * @secure
     */
    cityList: (
      query?: { Id?: string | null; NameLike?: string | null; ProvinceId?: string | null },
      params: RequestParams = {},
    ) =>
      this.request<CityIEnumerableResult, Result>({
        path: `/City`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  pickUp = {
    /**
     * No description
     *
     * @tags PickUp
     * @name CreateSpecialCreate
     * @summary ساخت درخواست جمع آوری ویژه)
     * @request POST:/PickUp/CreateSpecial
     * @secure
     */
    createSpecialCreate: (
      data: {
        BuildingId: string;
        SpecialDescription?: string | null;
        SpecialImageUrl?: File | null;
        SpecialWeekDay: EDay;
      },
      params: RequestParams = {},
    ) =>
      this.request<PickUpDtoResult, Result>({
        path: `/PickUp/CreateSpecial`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags PickUp
     * @name UserPickUpsList
     * @request GET:/PickUp/UserPickUps
     * @secure
     */
    userPickUpsList: (
      query?: {
        IsSpecial?: boolean | null;
        Status?: ERequestStatus;
        Page?: number;
        PageSize?: number;
        SortBy?: string | null;
        OrderBy?: EOrderBy;
      },
      params: RequestParams = {},
    ) =>
      this.request<ProcedurePickUpDtoListWithTotalResult, Result>({
        path: `/PickUp/UserPickUps`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  pickUpHistory = {
    /**
     * No description
     *
     * @tags PickUpHistory
     * @name PickUpHistoryList
     * @request GET:/PickUpHistory
     * @secure
     */
    pickUpHistoryList: (
      query?: {
        IsSpecial?: boolean | null;
        Days?: number | null;
        Page?: number;
        PageSize?: number;
        SortBy?: string | null;
        OrderBy?: EOrderBy;
      },
      params: RequestParams = {},
    ) =>
      this.request<ProcedurePickUpDtoListWithTotalResult, Result>({
        path: `/PickUpHistory`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  province = {
    /**
     * No description
     *
     * @tags Province
     * @name ProvinceList
     * @request GET:/Province
     * @secure
     */
    provinceList: (query?: { Id?: string | null; NameLike?: string | null }, params: RequestParams = {}) =>
      this.request<ProvinceIEnumerableResult, Result>({
        path: `/Province`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  user = {
    /**
     * No description
     *
     * @tags User
     * @name UserList
     * @request GET:/User
     * @secure
     */
    userList: (query?: { request?: GetUserInfoRequest }, params: RequestParams = {}) =>
      this.request<UserDtoResult, Result>({
        path: `/User`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserPartialUpdate
     * @request PATCH:/User
     * @secure
     */
    userPartialUpdate: (
      data: { Name?: string | null; Email?: string | null; Avatar?: File | null },
      params: RequestParams = {},
    ) =>
      this.request<UserDtoResult, Result>({
        path: `/User`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),
  };
}
