import {
  DEPENDENCIES,
  EmpathyAdapterBuilder,
  EmpathyFacetMapper,
  EmpathyNumberRangeFacetMapper,
  EmpathyRequestParamsMapper,
  EmpathySimpleFacetMapper,
  SearchAdapter,
  SearchRequest,
  SearchResponse,
} from "@empathyco/x-adapter";
import { Result } from "@empathyco/x-types";
/*import { bannerMapper } from './demo-banner-mapper';
import { HierarchicalFacetMapper } from './demo-hierarchical-mapper';
import { promotedMapper } from './demo-promoted-mapper';
import { RequestFiltersMapper } from './demo-request-filters.mapper';
import { SearchRequestMapper } from './demo-request-mapper';
import { resultMapper } from './demo-result.mapper';
import { priceFilterMapper } from './demo-price-filter-mapper';
*/ import { EmpathyEndpointsService } from "./empathy-endpoints.service";

export const adapter2 = new EmpathyAdapterBuilder()
  /*  .addMapper(resultMapper, 'results')
  .addMapper(bannerMapper, 'banners')
  .addMapper(promotedMapper, 'promoteds')
  .addMapper(priceFilterMapper, 'numberRangeFilter')
  .replaceClassRequestMapper(SearchRequestMapper)
*/ .setFeatureConfig("search", {
    endpoint: "http://localhost:8080/api/search",
    responsePaths: {
      results: "hits",
    },
  })
  .configureContainer((container) => {
    container.unbind(DEPENDENCIES.ResponseMappers.facets);
    container.bind(DEPENDENCIES.ResponseMappers.facets).to(EmpathyFacetMapper);
    //    container.bind(DEPENDENCIES.ResponseMappers.facets).to(HierarchicalFacetMapper);
    container
      .bind(DEPENDENCIES.ResponseMappers.facets)
      .to(EmpathyNumberRangeFacetMapper);
    container
      .bind(DEPENDENCIES.ResponseMappers.facets)
      .to(EmpathySimpleFacetMapper);
    //    container.bind(DEPENDENCIES.RequestMappers.Parameters.filtersValue).to(RequestFiltersMapper);
    container.bind(DEPENDENCIES.requestMappers).to(EmpathyRequestParamsMapper);
    container.rebind(DEPENDENCIES.endpointsService).to(EmpathyEndpointsService);
  })
  .setInstance("platform")
  .build();

export const adapter: SearchAdapter = {
  search(request: SearchRequest): SearchResponse {
    return fetch(`http://localhost:8080/api/search?q=${request.query}`)
      .then((response): any => (response.ok ? response.json() : {}))
      .then((responseData) => ({
        totalResults: responseData.hits.length,
        queryTagging: {
          url: "",
          params: {},
        },
        facets: [],
        banners: [],
        promoteds: [],
        results: responseData.hits.map(
          (rawResult: any): Result => ({
            modelName: "Result",
            id: rawResult.id,
            name: rawResult.source.originalTitle,
            identifier: { value: rawResult.id },
            images: [],
            rating: { value: 0 },
            price: { value: 0, originalValue: 0, hasDiscount: false },
            tagging: {},
            type: "default",
            url: "www.google.com",
            isWishlisted: false,
          })
        ),
      })) as any;
  },
} as any; //TODO Implement rest of methods;
