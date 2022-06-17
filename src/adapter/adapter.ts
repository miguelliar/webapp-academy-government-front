import {
  DEPENDENCIES,
  EmpathyAdapterBuilder,
  EmpathyFacetMapper,
  EmpathyNumberRangeFacetMapper,
  EmpathyRequestParamsMapper,
  EmpathySimpleFacetMapper,
} from "@empathyco/x-adapter";
/*import { bannerMapper } from './demo-banner-mapper';
import { HierarchicalFacetMapper } from './demo-hierarchical-mapper';
import { promotedMapper } from './demo-promoted-mapper';
import { RequestFiltersMapper } from './demo-request-filters.mapper';
import { SearchRequestMapper } from './demo-request-mapper';
import { resultMapper } from './demo-result.mapper';
import { priceFilterMapper } from './demo-price-filter-mapper';
*/ import { EmpathyEndpointsService } from "./empathy-endpoints.service";

export const adapter = new EmpathyAdapterBuilder()
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
