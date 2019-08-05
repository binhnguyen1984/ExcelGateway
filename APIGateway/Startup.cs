using APIGateway.CommonHelpers;
using APIGateway.Middlewares;
using APIGateway.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Protocols;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;
using System.Security.Cryptography;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
//using ProxyKit;
//using System.Net.Http;

namespace APIGateway
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });

            //services.AddLogging(options =>
            //{
            //    options.AddDebug();
            //    options.AddConsole(console =>
            //    {
            //        console.IncludeScopes = true;
            //    });
            //});
            services.AddMvcCore()
                .AddAuthorization()
                .AddRazorPages(options => options.Conventions.AddPageRoute("/IndexPage", ""))
                .AddJsonOptions(options => options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore)
                .AddJsonFormatters()
                .WithRazorPagesRoot("/HomePage")
                .SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddAuthentication(options => ConfigureAuthentication(options));
            //services.AddProxy(httpClientBuilder =>
            //httpClientBuilder.ConfigurePrimaryHttpMessageHandler(() => new HttpClientHandler { ServerCertificateCustomValidationCallback = (_, __, ___, ____) => true, UseDefaultCredentials = true }));
        }

        private static void ConfigureAuthentication(Microsoft.AspNetCore.Authentication.AuthenticationOptions options)
        {
            options.DefaultAuthenticateScheme = "cookie";
            options.DefaultSignInScheme = "cookie";
        }

        //private static void ConfigureOpenIDConnect(Microsoft.AspNetCore.Authentication.OpenIdConnect.OpenIdConnectOptions options)
        //{
        //    options.Authority = Settings.CDPAuthUrl;
        //    options.RequireHttpsMetadata = false; // dev only
        //    options.ClientId = Settings.CDPClientId;
        //    options.ResponseType = OpenIdConnectResponseType.Code;
        //    options.ResponseMode = OpenIdConnectResponseMode.Query;
        //    options.AuthenticationMethod = Microsoft.AspNetCore.Authentication.OpenIdConnect.OpenIdConnectRedirectBehavior.RedirectGet;
        //    options.CallbackPath = "/";
        //    options.Scope.Clear();
        //    options.Scope.Add("openid");
        //    options.Scope.Add("volta");
        //    //options.SecurityTokenValidator = new CustomIdTokenValidator();      
        //    //options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
        //    //{
        //    //    SaveSigninToken = true,
        //    //    ValidateAudience = true,          // Validate the Audience
        //    //    ValidateIssuer = true,            // Validate the Issuer
        //    //    ValidateLifetime = true,          // Validate the tokens lifetime
        //    //    ValidIssuer = Settings.CDPAuthUrl,
        //    //    ValidAudience = Settings.CDPClientId,
        //    //    IssuerSigningKeys = openIdConfig.SigningKeys
        //    //};

        //    options.Events.OnRedirectToIdentityProvider = async context =>
        //    {
        //        context.ProtocolMessage.RedirectUri = Settings.CDPRedirectUrl;
        //        await Task.FromResult(0);
        //    };
        //    options.Events.OnRedirectToIdentityProvider = context =>
        //    {
        //        if (context.ProtocolMessage.RequestType == OpenIdConnectRequestType.Authentication)
        //        {
        //            var codeVerifier = IdentityModel.CryptoRandom.CreateUniqueId(64);
        //            context.Properties.Items.Add("code_verifier", codeVerifier);
        //            string codeChallenge;
        //            using (var sha256 = SHA256.Create())
        //            {
        //                var challengeBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(codeVerifier));
        //                codeChallenge = IdentityModel.Base64Url.Encode(challengeBytes);
        //            }
        //            //add code_challenge and code_challenge_method to the request
        //            context.ProtocolMessage.Parameters.Add("code_challenge", codeChallenge);
        //            context.ProtocolMessage.Parameters.Add("code_challenge_method", Settings.CodeChallengeMethod);
        //        }
        //        return Task.CompletedTask;
        //    };

        //    options.Events.OnAuthorizationCodeReceived = context =>
        //    {
        //        // only when authorization code is swapped for tokens
        //        if (context.TokenEndpointRequest?.GrantType == OpenIdConnectGrantTypes.AuthorizationCode)
        //        {
        //            //get stored code_verifier
        //            if (context.Properties.Items.TryGetValue("code_verifier", out var codeVerifier))
        //            {
        //                //add code_verifier to token request
        //                context.TokenEndpointRequest.Parameters.Add("code_verifier", codeVerifier);
        //            }
        //        }
        //        return Task.CompletedTask;
        //    };
        //}

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseAuthentication();
            app.UseStaticFiles();
            app.UseCookiePolicy();
            app.UseImpersonationMiddleWare();
            app.UseMvc();
            //app.Map("/api/hdb", app1 =>
            //{
            //    app1.RunProxy(ctx => ctx
            //        .ForwardTo(Settings.HDBUrl)
            //        .AddXForwardedHeaders()
            //        .Send());
            //});

            //app.Map("/api/cdp", app2 =>
            //{
            //    app2.RunProxy(ctx => ctx
            //        .ForwardTo(Models.Settings.CDPUrl)
            //        .AddXForwardedHeaders()
            //        .Send());
            //});
        }
    }
}
