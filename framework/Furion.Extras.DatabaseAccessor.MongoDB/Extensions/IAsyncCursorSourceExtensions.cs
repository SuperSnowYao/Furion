﻿// Copyright (c) 2020-2021 百小僧, Baiqian Co.,Ltd.
// Furion is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2. 
// You may obtain a copy of Mulan PSL v2 at:
//             https://gitee.com/dotnetchina/Furion/blob/master/LICENSE 
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.  
// See the Mulan PSL v2 for more details.

using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace MongoDB.Driver
{
    /// <summary>
    /// MongoDB 拓展方法
    /// </summary>
    public static partial class IAsyncCursorSourceExtensions
    {
        /// <summary>
        /// 
        /// </summary>
        /// <typeparam name="TDocument"></typeparam>
        /// <typeparam name="TNewProjection"></typeparam>
        /// <param name="entities"></param>
        /// <param name="projection"></param>
        /// <returns></returns>
        public static TNewProjection FirstOrDefault<TDocument, TNewProjection>(this IFindFluent<TDocument, TDocument> entities, Expression<Func<TDocument, TNewProjection>> projection)
        {
            return entities.Project(projection).FirstOrDefault();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <typeparam name="TDocument"></typeparam>
        /// <typeparam name="TNewProjection"></typeparam>
        /// <param name="entities"></param>
        /// <param name="projection"></param>
        /// <returns></returns>
        public static async Task<TNewProjection> FirstOrDefaultAsync<TDocument, TNewProjection>(this IFindFluent<TDocument, TDocument> entities, Expression<Func<TDocument, TNewProjection>> projection)
        {
            return await entities.Project(projection).FirstOrDefaultAsync();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <typeparam name="TDocument"></typeparam>
        /// <typeparam name="TNewProjection"></typeparam>
        /// <param name="entities"></param>
        /// <param name="projection"></param>
        /// <returns></returns>
        public static List<TNewProjection> ToList<TDocument, TNewProjection>(this IFindFluent<TDocument, TDocument> entities, Expression<Func<TDocument, TNewProjection>> projection)
        {
            return entities.Project(projection).ToList();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <typeparam name="TDocument"></typeparam>
        /// <typeparam name="TNewProjection"></typeparam>
        /// <param name="entities"></param>
        /// <param name="projection"></param>
        /// <returns></returns>
        public static async Task<List<TNewProjection>> ToListAsync<TDocument, TNewProjection>(this IFindFluent<TDocument, TDocument> entities, Expression<Func<TDocument, TNewProjection>> projection)
        {
            return await entities.Project(projection).ToListAsync();
        }

        /// <summary>
        /// 分页拓展
        /// </summary>
        /// <typeparam name="TDocument"></typeparam>
        /// <param name="entities"></param>
        /// <param name="pageIndex">页码，必须大于0</param>
        /// <param name="pageSize"></param>
        /// <returns></returns>
        public static MongoDBPagedList<TDocument> ToPagedList<TDocument>(this IFindFluent<TDocument, TDocument> entities, int pageIndex = 1, int pageSize = 20)
        {
            if (pageIndex <= 0) throw new InvalidOperationException($"{nameof(pageIndex)} must be a positive integer greater than 0.");

            var totalCount = entities.CountDocuments();
            var items = entities.Skip((pageIndex - 1) * pageSize).Limit(pageSize).ToEnumerable();
            var totalPages = (int)Math.Ceiling(totalCount / (double)pageSize);

            return new MongoDBPagedList<TDocument>
            {
                PageIndex = pageIndex,
                PageSize = pageSize,
                Items = items,
                TotalCount = (int)totalCount,
                TotalPages = totalPages,
                HasNextPages = pageIndex < totalPages,
                HasPrevPages = pageIndex - 1 > 0
            };
        }

        /// <summary>
        /// 分页拓展
        /// </summary>
        /// <typeparam name="TDocument"></typeparam>
        /// <param name="entities"></param>
        /// <param name="pageIndex">页码，必须大于0</param>
        /// <param name="pageSize"></param>
        /// <param name="cancellationToken"></param>
        /// <returns></returns>
        public static async Task<MongoDBPagedList<TDocument>> ToPagedListAsync<TDocument>(this IFindFluent<TDocument, TDocument> entities, int pageIndex = 1, int pageSize = 20, CancellationToken cancellationToken = default)
        {
            if (pageIndex <= 0) throw new InvalidOperationException($"{nameof(pageIndex)} must be a positive integer greater than 0.");

            var totalCount = await entities.CountDocumentsAsync();
            var items = entities.Skip((pageIndex - 1) * pageSize).Limit(pageSize).ToEnumerable();
            var totalPages = (int)Math.Ceiling(totalCount / (double)pageSize);

            return new MongoDBPagedList<TDocument>
            {
                PageIndex = pageIndex,
                PageSize = pageSize,
                Items = items,
                TotalCount = (int)totalCount,
                TotalPages = totalPages,
                HasNextPages = pageIndex < totalPages,
                HasPrevPages = pageIndex - 1 > 0
            };
        }
    }
}
